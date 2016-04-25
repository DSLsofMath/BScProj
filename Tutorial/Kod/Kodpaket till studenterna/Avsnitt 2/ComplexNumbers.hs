module ComplexNumbers where

import GHC.Real

--  Komplexa tal kan ses som ett par av reella v�rden.

data Complex = Complex (Double, Double)
    deriving Eq
--  D�r f�rsta komponenten representerar realdelen och den andra komponenten imagin�rdelen.

realPart :: Complex -> Double
realPart (Complex c) = fst c

imPart :: Complex -> Double
imPart (Complex c) = snd c

conjugate :: Complex -> Complex
conjugate z = Complex (realPart z, negate (imPart z))

-- | Argumentet av ett komplext tal. B�kigt v�rre p� grund av tr�kiga kvadranter och b�s.
arg :: Complex -> Double
arg z   | (imPart z) < 0  && (realPart z) < 0 = atan (imPart z / realPart z) - pi
        | (realPart z) < 0                  = atan (imPart z / realPart z) + pi
        | otherwise                         = atan (imPart z / realPart z)

scale :: Double -> Complex -> Complex
scale a z = Complex (a * realPart z, a * imPart z)

-- j �r det komplexa talet med realdelen 0 och imagin�rdelen 1
-- M�nga matematiktexter kallar detta talet ocks� f�r `i`
j :: Complex
j = Complex (0, 1)

printComplex :: Complex -> String
printComplex z
  | r == 0 = show im ++ "j"
  | im == 0 = show r
  | otherwise = show r ++ " + " ++ show im ++ "j"
    where im = imPart z
          r = realPart z


instance Show Complex where
    show = printComplex

instance Num Complex where
-- Plus �r f�rh�llandevist trivialt
    z + w           = Complex (realPart z + realPart w, imPart z + imPart w)

-- Multiplikationen f�ljer ifr�n att vi multiplicerar komponenterna parvis med varandra (i likhet med (a+b) * (c+d))
    z * w           = Complex (realZ*realW - imZ*imW, realZ*imW + realW*imZ)
        where realZ = realPart z
              realW = realPart w
              imZ   = imPart z
              imW   = imPart w

-- Negationen av ett komplext tal �r ett komplext tal d�r b�da komponenter �r negerade
    negate z        = Complex (negate $ realPart z, negate $ imPart z)

-- Eftersom komplexa tal inte har n�gon definition av positiva och negativa tal �r signum odefinierad.
    signum z        = z / abs z

-- Absolutbeloppet av ett komplext tal �r pythagoras sats p� dess komponenter.
    abs z           = Complex (hyp, 0)
        where hyp   = sqrt (r*r + im*im)
              r     = realPart z
              im    = imPart z

-- Heltal �r bara komplexa tal utan imagin�rdel
    fromInteger n   = Complex (fromInteger n, 0)

instance Fractional Complex where
-- Division utf�rs genom att man f�rl�nger hela br�ket med n�mnarens konjugat
    z / w = Complex (realPart zw' / realPart ww', imPart zw' / realPart ww')
        where zw' = z * (conjugate w)
              ww' = w * (conjugate w)

-- En kvot av tv� heltal �r helt reell och d�rf�r kommer imagin�rdelen vara 0
--TODO: B�ttre att g�ra som med (fromInteger n) ovan - det blir en effektivare ber�kning.
    fromRational z = fromInteger (numerator z) / fromInteger (denominator z)

-- Garanterar att imagin�rdelen alltid �r 0 ifr�n en fromRational
prop_testRatioNoImpart :: Rational -> Bool
prop_testRatioNoImpart ratio = imPart (fromRational ratio :: Complex) == 0

instance Floating Complex where
-- Det komplexa talet pi �r ett tal med realdelen pi och imagin�rdelen 0
    pi    = Complex (pi, 0)

-- Potenslagarna ger att e^(a+bj) <=> e^a * e^bj och
-- Eulers formel ger att e^bj <=> cos b + jsin b
-- TODO: B�ttre att g�ra som med (fromInteger n) ovan - det blir en effektivare ber�kning.

    exp z = scale (exp (realPart z)) (euler (imPart z))
        -- Skapar ett trigonometriskt komplext tal utifr�n en vinkel
        where euler phi = Complex (cos phi, sin phi)

-- Eulers formel ger att man kan skriva om sin x som (e^jx - e^-jx)/2j
-- Eftersom vi definerat exponentialfunktionen f�r komplexa tal kan vi anv�nda
-- eulers formel som v�r sinus implementation f�r komplexa tal
    sin z = (exp (j*z) - exp (-(j*z)))/(scale 2 j)

-- Eulers formel ger att man kan skriva om cos x som (e^jx + e^-jx)/2
    cos z = (exp (j*z) + exp (-(j*z)))/2

    cosh z = Complex (cosh (realPart z) * cos (imPart z), sinh (realPart z) * sin (imPart z))
    sinh z = Complex (sin (realPart z) * cosh (imPart z), cos (realPart z) * sinh (imPart z))


-- Eulers formel ger att z = re^(j*phi) och eftersom log och exponentialfunktionen
-- �r varandras inverser och logaritmlagarna ger ex. `log (a*b)` <=> `log a + log b`.
-- D�rf�r kan vi skriva log `z = log r + log (e^(j*phi))` = `log r + j*phi`
-- TODO: N�got fel med ` ovan
    log z = Complex (logR (abs z), (arg z))
        where logR = log . realPart


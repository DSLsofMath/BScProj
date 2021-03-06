$(function() {

	$('#introSvar1').click(function(e) {
		
		var correctAnswer = document.getElementById('1c');
		e.preventDefault();

		if (correctAnswer.checked === true) {
			showResult('#rightIntro1')
		}else {
			showResult('#wrongIntro1')
		};
	});

	$('#introSvar2').click(function(e) {
		
		var correctAnswer = document.getElementById('2a');
		e.preventDefault();

		if (correctAnswer.checked === true) {
			showResult('#rightIntro2')
		}else {
			showResult('#wrongIntro2')
		};
	});




	$('#komplexSvar1').click(function(e) {
		
		var correctAnswer = document.getElementById('1b');
		e.preventDefault();

		if (correctAnswer.checked === true) {
			showResult('#rightKomplex1')
		}else {
			showResult('#wrongKomplex1')
		};
	});

	$('#komplexSvar2').click(function(e) {
		
		var correctAnswer = document.getElementById('2b');
		e.preventDefault();

		if (correctAnswer.checked === true) {
			showResult('#rightKomplex2')
		}else {
			showResult('#wrongKomplex2')
		};
	});

	$('#komplexSvar3').click(function(e) {
		
		var correctAnswer = document.getElementById('3b');
		e.preventDefault();

		if (correctAnswer.checked === true) {
			showResult('#rightKomplex3')
		}else {
			showResult('#wrongKomplex3')
		};
	});

	$('#komplexSvar4').click(function(e) {
		
		var correctAnswer = document.getElementById('4c');
		e.preventDefault();

		if (correctAnswer.checked === true) {
			showResult('#rightKomplex4')
		}else {
			showResult('#wrongKomplex4')
		};
	});

	$('#komplexTest1').click(function(e) {

		var correctAnswer = "12+4j";
		var answer = $('#komplexText1').val();
		e.preventDefault;

		if (answer === correctAnswer) {
			showResult('#rightKomplexTest1')
		}else {
			showResult('#wrongKomplexTest1')
		};

	});


	$('#komplexTest2').click(function(e) {

		var correctAnswer1 = "25";
		var correctAnswer2 = "25+0j"
		var answer = $('#komplexText2').val();
		e.preventDefault;

		if (answer === correctAnswer1 || answer === correctAnswer2) {
			showResult('#rightKomplexTest2')
		}else {
			showResult('#wrongKomplexTest2')
		};
	});

	$('#komplexTest3').click(function(e) {

		var correctAnswer1 = "6,708";
		var correctAnswer2 = "6.708";
		var answer = $('#komplexText3').val();
		e.preventDefault;

		if (answer === correctAnswer1 || answer === correctAnswer2) {
			showResult('#rightKomplexTest3')
		}else {
			showResult('#wrongKomplexTest3')
		};
	});

	$('#komplexTest4').click(function(e) {

		var correctAnswer = "fromInteger 5";
		var answer = $('#komplexText4').val();
		e.preventDefault;

		if (answer === correctAnswer) {
			showResult('#rightKomplexTest4')
		}else {
			showResult('#wrongKomplexTest4')
		};
	});

	$('#komplexSol1').click(function(e) {
		e.preventDefault;
		showSolution('#showSol1');	
	});

	$('#komplexSol2').click(function(e) {
		e.preventDefault;
		showSolution('#showSol2');	
	});

	$('#komplexSol3').click(function(e) {
		e.preventDefault;
		showSolution('#showSol3');	
	});

	$('#komplexSol4').click(function(e) {
		e.preventDefault;
		showSolution('#showSol4');	
	});

	$('#komplexSol5').click(function(e) {
		e.preventDefault;
		showSolution('#showSol5');	
	});

	

	$('#signalerSvar1').click(function(e) {
		
		var correctAnswer = document.getElementById('1b');
		e.preventDefault();

		if (correctAnswer.checked === true) {
			showResult('#rightSignaler1')
		}else {
			showResult('#wrongSignaler1')
		};
	});


	$('#signalerSvar2').click(function(e) {
		
		var correctAnswer = document.getElementById('2a');
		e.preventDefault();

		if (correctAnswer.checked === true) {
			showResult('#rightSignaler2')
		}else {
			showResult('#wrongSignaler2')
		};
	});

	$('#signalerSvar3').click(function(e) {
		
		var correctAnswer = document.getElementById('3b');
		e.preventDefault();

		if (correctAnswer.checked === true) {
			showResult('#rightSignaler3')
		}else {
			showResult('#wrongSignaler3')
		};
	});
	
	$('#signalerSvar4').click(function(e) {
		
		var correctAnswer = document.getElementById('4b');
		e.preventDefault();

		if (correctAnswer.checked === true) {
			showResult('#rightSignaler4')
		}else {
			showResult('#wrongSignaler4')
		};
	});

	$('#signalerSvar5').click(function(e) {
		
		var correctAnswer = document.getElementById('5a');
		e.preventDefault();

		if (correctAnswer.checked === true) {
			showResult('#rightSignaler5')
		}else {
			showResult('#wrongSignaler5')
		};
	});

	$('#signalerTest1').click(function(e) {
		
		var correctAnswer1 = document.getElementById('T11a');
		var correctAnswer2 = document.getElementById('T12a');
		e.preventDefault();

		if (correctAnswer1.checked === true && correctAnswer2.checked === true) {
			showResult('#rightSignalerTest1')
		}else {
			showResult('#wrongSignalerTest1')
		};
	});

	$('#signalerTest2').click(function(e) {
		
		var correctAnswer1 = document.getElementById('T21c');
		var correctAnswer2 = document.getElementById('T22b');
		e.preventDefault();

		if (correctAnswer1.checked === true && correctAnswer2.checked === true) {
			showResult('#rightSignalerTest2')
		}else {
			showResult('#wrongSignalerTest2')
		};
	});

	$('#signalerSol1').click(function(e) {
		e.preventDefault;
		showSolution('#showSol1');
	});
	
	$('#signalerSol2').click(function(e) {
		e.preventDefault;
		showSolution('#showSol2');	
	});

	$('#signalerSol3').click(function(e) {
		e.preventDefault;
		showSolution('#showSol3');	
	});

	$('#signalerSol4').click(function(e) {
		e.preventDefault;
		showSolution('#showSol4');	
	});

	$('#LTISol1').click(function(e) {
		e.preventDefault;
		showSolution('#showSol1');
	});

	$('#LTISol2').click(function(e) {
		e.preventDefault;
		showSolution('#showSol2'); 
	});

	$('#LTISol4').click(function(e) {
		e.preventDefault;
		showSolution('#showSol4')
	});

	function showResult(a) {
		$(a).show().delay(200).addClass("in").fadeOut(1500);
	};

	function showSolution(a) {
		$(a).show().delay(200).addClass("in");
	};

	$(".alert button.close").click(function (e) {
    	$(this).parent().fadeOut('slow');
});
});
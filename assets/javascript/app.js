$(document).ready(function() {

	var questions;
	
	var timeUp;
	

	

		function varSet(){

		questions = [{
			question: "Who sang 'The Battle Evermore'?",
			answers: ["Queen", "The Beatles", "Led Zeppelin", "Rush"],
			correctanswer: 1
		
		},
		 {
			question: "Who sang the song 'Barracuda'?",
			answers: ["Heart", "Genesis", "Blondie", "ZZ Top"],
			correctanswer: 0
			
		},	
		 {
			question: "Who sang 'Miss America'?",
			answers: ["REO Speed Wagon", "The Rolling Stones", "The Beatles", "Styx"],
			correctanswer: 3
			
		},
		{
			question: "'I Am The Walrus' was sung by?",
			answers: ["The Rolling Stones", "The Monkees", "The Beatles", "The Silver Beatles"],
			correctanswer: 2
			
		},
		{
			question: "What group had the hit 'Magic Men'?",
			answers: ["Blondie", "Heart", "Queen", "Bread"],
			correctanswer: 2
		
		},
		{
			question: "'Runnin' with the Devil' was a hit for?",
			answers: ["Van Halen", "Ritchie Valens", "Rush", "Styx"],
			correctanswer: 0
			
		},
		{
			question: "Who had a hit called'The Immigrant Song'?",
			answers: ["The Doors", "The Byrds", "Led Zeppelin", "Queen"],
			correctanswer: 2
			
		},
		 {
			question: "Who sang 'Do You Want To Know A Secret?",
			answers: ["The Rolling Stones", "The Beatles", "John Lennon", "Mick Jagger"],
			correctanswer: 1
			
		},
		{
			question: "'Walk This Way' was sung by?",
			answers: ["Styx", "Cream", "Boston", "Aerosmith"],
			correctanswer: 3
		
		},
		{
			question: "'Rock of Ages' was sung by?",
			answers: ["Led Zeppelin", "Def Leopard", "ZZ Top", "Boston"],
			correctanswer: 1
			
		}]
	}
		
			});
var questionTime ={
		time: 30,


		reset: function () {
        	questionTime.time = 30;
        },
		start: function(){
			$("timer").html("Time Left: " + questionTime.time);
			var counter = setInterval(questionTime.count, 1000);
		},
		stop: function(){
        	clearInterval(counter);
    	},
    	count: function(){
    		questionTimer.time--;
	        $("#timer").html("Time Left: " + questionTimer.time);


    	}
    }

	var correct = 0;
	var incorrect = 0;
	var noanswer = 0;
	var Index = -1;

	

	
		$('#questions').html("<button class='btn' id='start'>Start</button>")
		$('#answer0, #answer1, #answer2, #answer3').hide().off('click');

		$('#start').on("click", function() {
			nextQuestion();
		});
	


	function askQuestions(){


		questionTime.start();
		$('#questions').html(questions.question);
		$('#answer0').show().html(questions[Index].answers[0]);
		$('#answer1').show().html(questions[Index].answers[1]);
		$('#answer2').show().html(questions[Index].answers[2]);
		$('#answer3').show().html(questions[Index].answers[3]);

		onClickAnswer();
	}
	function onClickAnswer() {
		$('.btn').on("click", function() {
			var btnClick = parseInt($(this).attr('value'));
			if(btnClick === qustions[Index].correctanswer) {
				rightAnswer();
			}
			else {
				wrongAnswer();
			}
		});
	}

	function wrongAnswer() {
		clearTimeout(timeUp);
		incorrect++;
		questionTimer.stop();
		questionTimer.reset();
		$('#time').empty();
		$('#question').text("Wrong Answer");
		$('#answer0, #answer1, #answer2, #answer3').hide().off('click');
		

		timeUp = setTimeout(advance, 4 * 1000);
	
	function rightAnswer() {
		clearTimeout(timeUp);
		correct++;
		questionTime.stop();
		questionTime.reset();
		$('#time').empty();
		$('#questions').text("Correct!");
		$('#answer0, #answer1, #answer2, #answer3').hide().off('click');


		timeUp = setTimeout(nextQuestion, 4 * 1000);
	}
}
	function nextQuestion() {
		var Index = -1;
		Index++;

		if(Index < questions.length) {
			askQuestions();
		varSet();
		
	}
}

		








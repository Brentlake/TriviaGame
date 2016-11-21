$(document).ready(function() {

	var question1;
	var question2;
	var question3;
	var question4;
	var question5;
	var question6;
	var question7;
	var question8;
	var question9;
	var question10;
	var correct;
	var incorrect;
	var timesup;
	var noanswer;

	var questionTime ={
		time: 30,


		reset: function () {
        	questionTime.time = 30;
        },
		start: function(){
			$("timer").html("Time Left: " + questionTime.time);
			counter = setInterval(questionTime.count, 1000);
		},
		stop: function(){
        	clearInterval(counter);
    	},
    	count: function(){
    		questionTimer.time--;
	        $("#timer").html("Time Left: " + questionTimer.time);


    	}

	}
		function varSet(){

		question1 = {
			question: "Who sang 'The Battle Evermore'?",
			answers: ["Queen", "The Beatles", "Led Zeppelin", "Rush"],
			correctanswer: 1
			gifright: 'assets/images/ledzeppelin.gif',
			gifwrong: 'assets/images/ledzeppelin.gif',
		}
		question2 = {
			question: "Who sang the song 'Barracuda'?",
			answers: ["Heart", "Genesis", "Blondie", "ZZ Top"],
			correctanswer: 0
			gifright: 'assets/images/heart1.gif',
			gifwrong: 'assets/images/heart1.gif',
		}	
		question3 = {
			question: "Who sang 'Miss America'?",
			answers: ["REO Speed Wagon", "The Rolling Stones", "The Beatles", "Styx"],
			correctanswer: 3
			gifright: 'assets/images/styx.gif',
			gifwrong: 'assets/images/styx.gif',

		}
		question4 = {
			question: "'I Am The Walrus' was sung by?",
			answers: ["The Rolling Stones", "The Monkees", "The Beatles", "The Silver Beatles"],
			correctanswer: 2
			gifright: 'assets/images/beatles1.gif',
			gifwrong: 'assets/images/beatles1.gif',
		}
		question5 = {
			question: "What group had the hit 'Magic Men'?",
			answers: ["Blondie", "Heart", "Queen", "Bread"],
			correctanswer: 2
			gifright: 'assets/images/heart.gif',
			gifwrong: 'assets/images/heart.gif',
		}
		question6 = {
			question: "'Runnin' with the Devil' was a hit for?",
			answers: ["Van Halen", "Ritchie Valens", "Rush", "Styx"],
			correctanswer: 0
			gifright: 'assets/images/vanhalen.gif',
			gifwrong: 'assets/images/vanhalen.gif',
		}
		question7 = {
			question: "Who had a hit called'The Immigrant Song'?",
			answers: ["The Doors", "The Byrds", "Led Zeppelin", "Queen"],
			correctanswer: 2
			gifright: 'assets/images/zeppelin2.gif',
			gifwrong: 'assets/images/zeppelin2.gif',
		}
		question8 = {
			question: "Who sang 'Do You Want To Know A Secret?",
			answers: ["The Rolling Stones", "The Beatles", "John Lennon", "Mick Jagger"],
			correctanswer: 1
			gifright: 'assets/images/beatles2.gif',
			gifwrong: 'assets/images/beatles2.gif',
		}
		question9 = {
			question: "'Walk This Way' was sung by?",
			answers: ["Styx", "Cream", "Boston", "Aerosmith"],
			correctanswer: 3
			gifright: 'assets/images/aerosmith.gif',
			gifwrong: 'assets/images/aerosmith.gif',
		}
		question10 = {
			question: "'Rock of Ages' was sung by?",
			answers: ["Led Zeppelin", "Def Leopard", "ZZ Top", "Boston"],
			correctanswer: 1
			gifright: 'assets/images/defleopard.gif',
			gifwrong: 'assets/images/defleopard.gif',,
		}
	}
		





}

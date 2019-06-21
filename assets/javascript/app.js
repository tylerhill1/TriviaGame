function startNew() {

$("#startOver").empty();
$("#start").empty();
$("#timeRemaining").text("Time Remaining: ");
$("#timeRemaining").append("<span id='timer'>" + 5 + "</span>");
var question1 = {
    question: "How many majors has Roger Federer won?",
    answer1: "18",
    answer2: "22",
    answer3: "24",
    correctAnswer: "20",
    gif: "assets/images/fed.gif"
}

var question2 = {
    question: "How many French Opens has Rafael Nadal won?",
    answer1: "2",
    answer2: "10",
    answer3: "8",
    correctAnswer: "12",
    gif: "assets/images/nadal.gif"
}

var question3 = {
    question: "How tall is the tallest man on tour?",
    answer1: "6\'9\"",
    answer2: "6\'10\"",
    answer3: "7\"",
    correctAnswer: "6\'11\"",
    gif: "assets/images/karlovic.gif"
}

var question4 = {
    question: "How short is the shortest man on tour?",
    answer1: "5\'9\"",
    answer2: "5\'10\"",
    answer3: "5\'8\"",
    correctAnswer: "5\'7\"",
    gif: "assets/images/diego.gif"
}

var questions = [
    question1,
    question2,
    question3,
    question4
]


var lengthOfGame = questions.length;
var tracker = 0;
var wins = 0;
var losses = 0;
var unanswered = 0;
var intervalId;
var number = 5;

console.log("Length: " + questions.length);
console.log("Questions: " + questions);


function newQuestion() {
    if(questions.length>0) {
    var min = 0;
    var max = questions.length - 1;
    number = 5;

    
    // generates random number
    function generateRandomInteger (min , max) {
        return Math.floor(min + Math.random()*(max + 1 - min));
    }

    // pulls the element with that index from the array
    var number = generateRandomInteger(min, max);
    var currentQuestion = questions[number];
    questions.splice(number, 1);
    console.log("question array: " + questions);
    console.log(currentQuestion);
    $("#buttons").empty();
    
    randomizer = [];

    var a = $("<button>");
    a.attr("id", "answer1");
    a.attr("value", "incorrect");
    randomizer.push(a);

    var b = $("<button>");
    b.attr("id", "answer2");
    b.attr("value", "incorrect");
    randomizer.push(b);

    var c = $("<button>");
    c.attr("id", "answer3");
    c.attr("value", "incorrect");
    randomizer.push(c);

    var d = $("<button>");
    d.attr("id", "correctAnswer");
    d.attr("value", "correct");
    randomizer.push(d);

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    shuffleArray(randomizer);

    $("#buttons").append(randomizer[0]);
    $("#buttons").append(randomizer[1]);
    $("#buttons").append(randomizer[2]);
    $("#buttons").append(randomizer[3]);

    $("#result").text("");
    $("#pic").empty();
    $("#question").text(currentQuestion.question);
    $("#answer1").text(currentQuestion.answer1);
    $("#answer2").text(currentQuestion.answer2);
    $("#answer3").text(currentQuestion.answer3);
    $("#correctAnswer").text(currentQuestion.correctAnswer);
    $("#timer").text(5);

    run();

    

    $("button").on("click", function() {
        stop();
        var answer = this.value;
        console.log("test: " + answer);
        if(answer === "correct") {
            wins++;
            $("#result").html("You were right!!!");
        }
        else {
            losses++;
            $("#result").html("NOPE!<h4>The correct answer was: " + currentQuestion.correctAnswer + "</h4>");
        }
    
        var help = currentQuestion.gif;
        console.log("help: " + help);
        $("#buttons").empty();
        $("#pic").html('<img src=' + help + ' />');
    
        console.log("Does this work?");
        var test = setTimeout(newQuestion, 2500);
    
    });
    return currentQuestion;

    }
    else {
        $("#result").text("All done! Here's how you did:");
        $("#question").empty();
        $("#pic").html(
            "<p>Correct: " + wins + "<br>" +
            "Incorrect: " + losses + "<br>" +
            "Unanswered: " + unanswered + "</p>"
            );
        $("#buttons").empty();

        var e = $("<button>");
        e.attr("id", "redo");
        $("#startOver").append(e);
        $("#redo").text("Start over?");
        return true;
    }

}



var currentQuestion = newQuestion();
if (currentQuestion) {
    return;
}
console.log(currentQuestion);

function run() {
    number = 5;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

function decrement() {

    number--;

    $("#timer").text(number);
    
    if(number === 0) {
        unanswered++;
        stop();
    
        $("#result").text("Out of time!!!");
        
        var help = currentQuestion.gif;
        console.log("help: " + help);
        $("#buttons").empty();
        $("#pic").html('<img src=' + help + ' />');
    
        console.log("Does this work?");
        var test = setTimeout(newQuestion, 2500);
    }
    
  }

function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
  }

}


$("#start").on("click", function() {
    console.log("DOES THIS WORK?")
    startNew();
});


console.log("ARE YOU HERE YET?")

$("#startOver").on("click", function() {
    console.log("DOES THIS WORK?")
    startNew();
});
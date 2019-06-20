function startNew() {

$("#startOver").empty();
var question1 = {
    question: "How many feet are in a mile?",
    answer1: "mile1",
    answer2: "mile2",
    answer3: "mile3",
    correctAnswer: "mileCorrect",
    gif: "assets/images/thumbsup.jpg"
}

var question2 = {
    question: "How many feet are in a yard?",
    answer1: "yard1",
    answer2: "yard2",
    answer3: "yard3",
    correctAnswer: "yardCorrect",
    gif: "assets/images/thumbsdown.jpg"
}

var question3 = {
    question: "How many feet are in a meter?",
    answer1: "meter1",
    answer2: "meter2",
    answer3: "meter3",
    correctAnswer: "meterCorrect",
    gif: "assets/images/thumbsdown.jpg"
}

var questions = [
    question1,
    question2,
    question3
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

    var a = $("<button>");
    a.attr("id", "answer1");
    a.attr("value", "incorrect")
    $("#buttons").append(a);

    var b = $("<button>");
    b.attr("id", "answer2");
    b.attr("value", "incorrect")
    $("#buttons").append(b);

    var c = $("<button>");
    c.attr("id", "answer3");
    c.attr("value", "incorrect")
    $("#buttons").append(c);

    var d = $("<button>");
    d.attr("id", "correctAnswer");
    d.attr("value", "correct")
    $("#buttons").append(d);

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
            $("#result").text("You were right!!!");
        }
        else {
            losses++;
            $("#result").text("NOPE!");
        }
    
        var help = currentQuestion.gif;
        console.log("help: " + help);
        $("#buttons").empty();
        $("#pic").html('<img src=' + help + ' />');
    
        console.log("Does this work?");
        var test = setTimeout(newQuestion, 1000);
    
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
        var test = setTimeout(newQuestion, 1000);
    }
    
  }

function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
  }

}

startNew();


console.log("ARE YOU HERE YET?")

$("#startOver").on("click", function() {
    console.log("DOES THIS WORK?")
    startNew();
});
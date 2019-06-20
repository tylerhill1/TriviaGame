console.log("test");
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
var intervalId;
var number = 30;

console.log("Length: " + questions.length);
console.log("Questions: " + questions);


function newQuestion() {
    var min = 0;
    var max = questions.length - 1;
    number = 30;

    
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
    $("#buttons").append(a);

    var b = $("<button>");
    b.attr("id", "answer2");
    $("#buttons").append(b);

    var c = $("<button>");
    c.attr("id", "answer3");
    $("#buttons").append(c);

    var d = $("<button>");
    d.attr("id", "correctAnswer");
    $("#buttons").append(d);

    $("#result").text("");
    $("#pic").empty();
    $("#question").text(currentQuestion.question);
    $("#answer1").text(currentQuestion.answer1);
    $("#answer2").text(currentQuestion.answer2);
    $("#answer3").text(currentQuestion.answer3);
    $("#correctAnswer").text(currentQuestion.correctAnswer);
    $("#timer").text(30);

    run();

    $("button").on("click", function() {
        stop();
        var answer = this.value;
        console.log("test: " + answer);
        if(answer === "correct") {
            $("#result").text("You were right!!!");
        }
        else {
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


var currentQuestion = newQuestion();
console.log(currentQuestion);

function run() {
    number = 30;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

function decrement() {

    number--;

    $("#timer").text(number);

    if (number === 0) {

      // stop(); //this needs to be a function moving them to the next page

      alert("Time Up!");
    }
  }

function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
  }

// $("#question").text(currentQuestion.question);
// $("#answer1").text(currentQuestion.answer1);
// $("#answer2").text(currentQuestion.answer2);
// $("#answer3").text(currentQuestion.answer3);
// $("#correctAnswer").text(currentQuestion.correctAnswer);

// function run() {
//     clearInterval(intervalId);
//     intervalId = setInterval(decrement, 1000);
//   }

// function decrement() {

//     number--;

//     $("#timer").text(number);

//     if (number === 0) {

//       // stop(); //this needs to be a function moving them to the next page

//       alert("Time Up!");
//     }
//   }

// $("button").on("click", function() {
//     stop();
//     var answer = this.value;
//     console.log("test: " + answer);
//     if(answer === "correct") {
//         $("#result").text("You were right!!!");
//     }
//     else {
//         $("#result").text("NOPE!");
//     }

//     var help = currentQuestion.gif;
//     console.log("help: " + help);
//     $("#buttons").empty();
//     $("#pic").html('<img src=' + help + ' />');

//     console.log("Does this work?");
//     var test = setTimeout(newQuestion, 1000);

// });


// function displayNewWord() {
//     document.getElementById("currentWord").innerHTML = "";
//     for(i=0; i<currentWord.length; i++) {
//         document.getElementById("currentWord").innerHTML = document.getElementById("currentWord").innerHTML + displayedWord[i];   
//     }
//     return finalWord = document.getElementById("currentWord").innerHTML;
// }
// function displayWord() {
//     // display the _ _ _ ... according to the number of letters in the word
//     for (i=0; i<currentWord.length; i++) {
//         displayedWord.push("_ ");
//     }
    
//     return finalWord = displayNewWord();
// }

// displayWord();

// console.log("This is the current word: " + finalWord)

// function spliceArray(x, y) {
//     displayedWord.splice(x, 1, y);
//   }

// // letter checking function
// document.onkeyup = function(event) {
    
//     var letter = event.key.toLowerCase();
//     if (letter != "a" && letter != "b" && letter != "c" && letter != "d" && letter != "e" && letter != "f" && letter != "g" && letter != "h" && letter != "i" && letter != "j" && letter != "k" && letter != "l" && letter != "m" && letter != "n" && letter != "o" && letter != "p" && letter != "q" && letter != "r" && letter != "s" && letter != "t" && letter != "u" && letter != "v" && letter != "w" && letter != "x" && letter != "y" && letter != "z") {
//         return;
//     }
//     var j = 0;
//     var k = 0;
//     console.log("Does this work? " + currentWord);

//     for(i=0; i<currentWord.length; i++) {
        
//         if(letter === currentWord.charAt(i)) {
//             k++;
//         }
        
//     }

//     if(k===0) {
//         for(i=0; i<incorrectGuesses.length; i++) {
//             if(letter === incorrectGuesses[i]) {
//                 console.log("TEST");
//                 return;
//             }
//         }
//         incorrectGuessesRemaining--;
//         document.getElementById("guesses").innerHTML = incorrectGuessesRemaining;
//         incorrectGuesses.push(letter);

//         var check = document.getElementById("guessedLetters").innerHTML;
//         if(check === "") {
//             document.getElementById("guessedLetters").innerHTML = letter;
//         }
//         else {
//             document.getElementById("guessedLetters").innerHTML = document.getElementById("guessedLetters").innerHTML + ", " + letter;
//         }

//         if(incorrectGuessesRemaining==0) {
//             incorrectGuesses = [];
//             document.getElementById("guessedLetters").innerHTML = "";
//             incorrectGuessesRemaining = 6;
//             document.getElementById("guesses").innerHTML = incorrectGuessesRemaining;
//             displayedWord = [];
//             if(words.length>0) {
//                 currentWord = newWord();
//                 // var currentWord = newWord();
//                 displayWord();
//                 // console.log(currentWord);
//                 return;
//             }
//             else {
//                 document.getElementById("currentWord").innerHTML = "There are no more words. Thank you for playing!";
//                 return;
//             }
//         }
//     }
    
//     for(i=0; i<displayedWord.length; i++) {
        
//         if((letter + " ") === displayedWord[i]) {
//             j++;
//         }
        
//     }
//     console.log(currentWord.length);
    
//     if (j === 0) {

//         for(i=0; i<currentWord.length; i++) {
//         var correctLetter = currentWord.charAt(i);
//         console.log("correct letter: " + correctLetter);
//         console.log("letter: " + letter);

//         if(letter === correctLetter) {
//             spliceArray(i, letter + " ");
//             correctLetterCounter++;
//         }
//     }
//     console.log("correct letters:" + correctLetterCounter);
//     console.log(wins);
//     displayNewWord();
//     }

//     console.log("displayed word length: " + displayedWord.length)

//     if(correctLetterCounter === displayedWord.length) {
//         if(words.length>0) {
//             incorrectGuesses = [];
//             document.getElementById("guessedLetters").innerHTML = "";
//             incorrectGuessesRemaining = 6;
//             document.getElementById("guesses").innerHTML = incorrectGuessesRemaining;
//             displayedWord = [];
//         currentWord = newWord();
//         // var currentWord = newWord();
//         displayWord();
//         // console.log(currentWord);
//         wins++;
//         console.log(wins);
//         document.getElementById("wins").innerHTML = wins;

//         }
//         else {
//             document.getElementById("currentWord").innerHTML = "There are no more words. Thank you for playing!";
//         }
//         }
// }

// function playAudio(url) {
//     var a = new Audio(url);
//     a.play();
//     document.getElementById("btn1").disabled = true; 
//   }

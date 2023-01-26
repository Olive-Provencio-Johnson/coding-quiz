//variables I may need 
var highscores = "";
var goBack = "";
var timeSubtraction = "";
var questionNumber = 0;
var correctAnswers = 0;

let start = document.getElementById("start");


//FIRST:  Create start button (created in HTML)
start.addEventListener("click", function () {
    setTime();
    startQuiz();
    console.log('ok');

})

//SECOND: Start button starts a timer 
function setTime() {
    var timer = document.querySelector(".timer");
    var secondsLeft = 76
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds left in the game.";

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}

// Function to stop game 
function sendMessage() {
    timer.textContent = "Game Over";
}

//function used for selecting choices within each question
function selectChoice() {
    console.log("click")
}


//THIRD: First question is presented after timer is started 
function startQuiz() {
    console.log("you started the quiz")
    //hide welcome message once start quiz button is clicked
    document.getElementById("welcome").style.display = "none";

    //display the question box element 
    document.getElementById("questionBox").style.display = "block";

    console.log(quizQuestions);
    console.log(quizQuestions[0].questionTitle);

    refreshQuestions();
    
}


optionOne.addEventListener("click", function () {
    if (quizQuestions[questionNumber].options.one === quizQuestions[questionNumber].answer){
        console.log('Correct!');
        correctAnswers++;
    }

    correctAnswers++;
    questionNumber++;

    refreshQuestions();


})

function refreshQuestions() {
//relates to the div in HTML where the question will live
var questionHeaderEl = document.getElementById("question");

//take the variable created above and use .textContent to input the first quiz question 
questionHeaderEl.textContent = quizQuestions[questionNumber].questionTitle;

//console log the first question and options
console.log(quizQuestions[0].options);
console.log(quizQuestions[0].options.one);

//variables related to each question "option", e.g. ABC or D 
var questionOptionOne = document.getElementById("optionOne");
var questionOptionTwo = document.getElementById("optionTwo");
var questionOptionThree = document.getElementById("optionThree");
var questionOptionFour = document.getElementById("optionFour");

//reassigning the variable to apply to the var QuizQuestions options, or buttons. 
questionOptionOne.textContent = quizQuestions[questionNumber].options.one;

questionOptionTwo.textContent = quizQuestions[questionNumber].options.two;

questionOptionThree.textContent = quizQuestions[questionNumber].options.three;

questionOptionFour.textContent = quizQuestions[questionNumber].options.four;

//create a method to have the (1) correct answer identified, and (2) once the answer is revealed, have the current question hide, (3) and the next question revealed 

//Eventlistener, followed by a function that will (1) identify "wrong" or "correct" THEN move to the next question 

questionOptionOne.addEventListener("click", selectChoice);

questionOptionTwo.addEventListener("click", selectChoice);

questionOptionThree.addEventListener("click", selectChoice);

questionOptionFour.addEventListener("click", selectChoice);

//call a function for the getNextQuestion function. This is where you will do the iterating 

// function getNextQuestion() {
//     // document.getElementById(#question).style.display = "block"; 
//       //below syntax may be used to change the questions as they are answered. 
//       document.getElementById(#questionBox).innerHTML = new HTML
//input Quiz Questions variable somehow 
//     //   var QuizQuestions = 
}


//Questions (iterate over the array)
var quizQuestions = [
    {
        questionTitle: "Which geometric shape is generally used for stop signs?",
        answer: "Octagon",
        options: {
            one: "Octagon",
            two: "Hexagon",
            three: "Decagon",
            four: "Heptagon",
        },
    },
    {
        questionTitle: "Who was the first woman to win a Nobel Prize (in 1903)?",
        options: {
            one: "x",
            two: "Marie Curie",
            three: "x",
            four: "x",
        }
    },
    {
        questionTitle: "Who was the first woman pilot to fly solo across the Atlantic?",
        options: {
            one: "x",
            two: "x",
            three: "Amelia Earhart",
            four: "x",
        }
    },
]


// function quizQuestions(){

// }

//FOURTH When a question is answered, the next question is presented 

//FIFTH When a question is answered incorrectly, time is subtracted from the clock 


// SIXTH The game is OVER when all questions are answered OR the timer reaches 0
// SEVENTH When the game is over the user can save their initials AND their score
var highscores = "";
var goBack = "";
var timeSubtraction = "";

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
            // Calls function to create and append image
            sendMessage();
        }

    }, 1000);
}

// Function to stop game 
function sendMessage() {
    timer.textContent = "Game Over";
}

//used for selecting choices within each question, function below 
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

    //relates to the div in HTML where the question will live
    var questionHeaderEl = document.getElementById("question");

    //take the variable created above and use .textContent to input the first quiz question 
    questionHeaderEl.textContent = quizQuestions[0].questionTitle;

//console log the first question and options
    console.log(quizQuestions[0].options)
    console.log(quizQuestions[0].options.a)

    var questionOption1 = document.getElementById("option1")
    var questionOption2 = document.getElementById("option2")
    var questionOption3 = document.getElementById("option3")
    var questionOption4 = document.getElementById("option4")

    questionOption1.textContent = quizQuestions[0].options.a;

    questionOption2.textContent = quizQuestions[0].options.b;

    questionOption3.textContent = quizQuestions[0].options.c;

    questionOption4.textContent = quizQuestions[0].options.d;

    //create a method to have the (1) correct answer identified, and (2) once the answer is revealed, have the current question hide, (3) and the next question revealed 

    //Eventlistener, followed by a function that will (1) identify "wrong" or "correct" THEN move to the next question 

 questionOption1.addEventListener("click", selectChoice);

 questionOption2.addEventListener("click", selectChoice);

 questionOption3.addEventListener("click", selectChoice);

 questionOption4.addEventListener("click", selectChoice);

    //call a function for the getNextQuestion function. This is where you will do the iterating 

    // function getNextQuestion() {
    //     // document.getElementById(#question).style.display = "block"; 
    //       //below syntax may be used to change the questions as they are answered. 
    //       document.getElementById(#questionBox).innerHTML = new HTML
    //input Quiz Questions variable somehow 
    //     //   var QuizQuestions = 
}


// }



//Questions (iterate over the array)
var quizQuestions = [
    {
        questionTitle: "Which geometric shape is generally used for stop signs?",
        options: {
            a: 'Octagon',
            b: 'Hexagon',
            c: "Decagon",
            d: "Heptagon",
        },
    },
    {
        questionTitle: "This is a question placeholder",
        options: {
            a: 'x',
            b: 'x',
            c: "x",
            d: "x",
        }
    }
]


// function quizQuestions(){

// }

//FOURTH When a question is answered, the next question is presented 

//FIFTH When a question is answered incorrectly, time is subtracted from the clock 


// SIXTH The game is OVER when all questions are answered OR the timer reaches 0
// SEVENTH When the game is over the user can save their initials AND their score
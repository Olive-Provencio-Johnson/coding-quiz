//variables I may need 
var highscores = "";
var goBack = "";
var timeSubtraction = "";
var questionNumber = 0;
var correctAnswers = 0;
var secondsLeft = 76;
var answerRevealed = "";

let start = document.getElementById("start");


//------Create start button (created in HTML)------
start.addEventListener("click", function () {
    setTime();
    startQuiz();
    console.log('ok');

})

//------Start button starts a timer ------
function setTime() {
    var timer = document.querySelector(".timer");

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

//------The game is OVER when all questions are answered OR the timer reaches 0
// Function to stop game. 
function sendMessage() {
    timer.textContent = "Game Over";
}

//function used for selecting choices within each question
function selectChoice() {
    console.log("click")
}


//------First question is presented after timer is started ------
function startQuiz() {
    console.log("you started the quiz")
    //hide welcome message once start quiz button is clicked
    document.getElementById("welcome").style.display = "none";

    //display the question box element 
    document.getElementById("questionBox").style.display = "block";

    // console.log(quizQuestions);
    // console.log(quizQuestions[0].questionTitle);

    refreshQuestions();

}

//The following four functions are only called when the associated button is clicked on, === the correct answer, as called out in the object var quizQuestions below.
optionOne.addEventListener("click", function () {
    if (quizQuestions[questionNumber].options.one === quizQuestions[questionNumber].answer) {
        console.log('Correct!');
        correctAnswers++;
    }
    //------When a question is answered incorrectly, time is subtracted from the clock ------
    else {
        secondsLeft = secondsLeft - 10;
    }
    questionNumber++;

    refreshQuestions();

})

optionTwo.addEventListener("click", function () {
    if (quizQuestions[questionNumber].options.two === quizQuestions[questionNumber].answer) {
        console.log('Correct!');
        correctAnswers++;
    }
    //------When a question is answered incorrectly, time is subtracted from the clock ------
    else {
        secondsLeft = secondsLeft - 10;
    }
    questionNumber++;

    refreshQuestions();

})

optionThree.addEventListener("click", function () {
    if (quizQuestions[questionNumber].options.three === quizQuestions[questionNumber].answer) {
        console.log('Correct!');
        correctAnswers++;
    }
    //------When a question is answered incorrectly, time is subtracted from the clock ------
    else {
        secondsLeft = secondsLeft - 10;
    }


    questionNumber++;

    refreshQuestions();

})

optionFour.addEventListener("click", function () {
    if (quizQuestions[questionNumber].options.four === quizQuestions[questionNumber].answer) {
        console.log('Correct!');
        correctAnswers++;
    }
    //------When a question is answered incorrectly, time is subtracted from the clock ------
    else {
        secondsLeft = secondsLeft - 10;
    }
    questionNumber++;

    refreshQuestions();

})

//------When a question is answered, the next question is presented------ 
function refreshQuestions() {
    console.log(questionNumber)
    //relates to the div in HTML where the question will live
    var questionHeaderEl = document.getElementById("question");

    //take the variable created above and use .textContent to input the first quiz question 
    questionHeaderEl.textContent = quizQuestions[questionNumber].questionTitle;

    //console log the first question and options
    //console.log(quizQuestions[0].options);
    //console.log(quizQuestions[0].options.one);

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


    //Eventlistener, followed by a function that will (1) identify "wrong" or "correct" THEN move to the next question 
    questionOptionOne.addEventListener("click", selectChoice);
    questionOptionTwo.addEventListener("click", selectChoice);
    questionOptionThree.addEventListener("click", selectChoice);
    questionOptionFour.addEventListener("click", selectChoice);

}


//Quiz Questions (iterate over the array).  I use the var questionNumber to iterate through each question "number", i.e. the numbers in my object
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
        answer: "Marie Curie",
        options: {
            one: "Jane Addams",
            two: "Marie Curie",
            three: "Emily Greene Balch",
            four: "Baroness Bertha Sophie Felicita von Suttner, née Countess Kinsky von Chinic und Tettau",
        }
    },
    {
        questionTitle: "Who was the first woman pilot to fly solo across the Atlantic?",
        answer: "Amelia Earhart",
        options: {
            one: "Harriet Quimby",
            two: "Bessie Coleman",
            three: "Amelia Earhart",
            four: "Amy Johnson",
        }
    },
    {
        questionTitle: "What was the first soft drink in space?",
        answer: "Coca Cola",
        options: {
            one: "Sprite",
            two: "Pepsi",
            three: "Coca Cola",
            four: "Dr. Pepper",
        }
    },
]


// SEVENTH When the game is over the user can save their initials AND their score
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
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft + " seconds left in the game.";

    if(secondsLeft === 0) {
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



//THIRD: First question is presented after timer is started 
function startQuiz() {
    console.log("you started the quiz")
    document.getElementById("welcome").style.display = "none";
    document.getElementById("questionBoxOne").style.display = "block";


} 


//Questions 
// var quizQuestions = [
//     {
//         questionOne: "Which geometric shape is generally used for stop signs?", 
//         options: {
//             a: 'Octagon',
//             b: 'Hexagon',
//             c: "Decagon", 
//             d: "Heptagon",
//         }, 
//     }
// ]

// function quizQuestions(){

// }

//FOURTH When a question is answered, the next question is presented 

//FIFTH When a question is answered incorrectly, time is subtracted from the clock 


// SIXTH The game is OVER when all questions are answered OR the timer reaches 0
// SEVENTH When the game is over the user can save their initials AND their score
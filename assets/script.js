// Set Variables

var start = document.getElementById("startButton");
var countDwn = document.getElementById("timerNumber");
var quizInfo = document.getElementById("quiz");
var questions = document.getElementById("questions");
var quizResult = document.getElementById("results");
var resetButton = document.getElementById("playAgain");
var userAnswer = document.getElementById("answers");
var initials = document.getElementById("urInitials");
var submitInit = document.getElementById("submitButton");



var currentQuestion = 0;
var choices;
var timer;
var time;




// The startGame function is called when the start button is clicked
function startGame() {
  time = 60;
// Prevents start button from being clicked when quiz is in progress
  startButton.disabled = true;
  startTimer()
}
function startTimer() {
  // Sets timer 
  timer = setInterval(function() {
    time --;
    countDwn.textContent = time;
    
  // Tests if time has run out
    if (time === 0) {
  // Clears interval
      clearInterval(timer);
    }
  }, 1000);
}

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);


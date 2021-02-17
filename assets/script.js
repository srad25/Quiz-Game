// Set Variables

var start = document.getElementById("startButton");
var countDwn = document.getElementById("timerNumber");
var quizInfo = document.getElementById("quiz");
var myQuestions = document.getElementById("questions");
var quizResult = document.getElementById("results");
var resetButton = document.getElementById("playAgain");
var userAnswer = document.getElementById("answers");
var initials = document.getElementById("urInitials");
var submitInit = document.getElementById("submitButton");



var currentQuestion = -1;
var choices;
var answer;
var timer;
var time;





// The startGame function is called when the start button is clicked
function startGame() {
  time = 60;
// Prevents start button from being clicked when quiz is in progress
  startButton.disabled = true;
// Timer starts when start button is clicked and shows first question
  startTimer()
 // getQuestion();
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

//Start Quiz
// Get questions
function getQuestions() {
  currentQuestion++;
  answer = questions[currentQuestion].answer

  myQuestions.textContent = questions[currentQuestion].title;
  userAnswer.innerHTML = "";

   choices = questions[currentQuestion].choices;

  for (var i = 0; i < choices.length; i++) {
      var nextChoice = document.createElement("button");

      nextChoice.textContent = choices[i]
      answerBtn = userAnswer.appendChild(nextChoice).setAttribute("style", "color: white; padding 10px; margin-left 35px");
  }
}


  
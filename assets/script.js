// Set Variables

var startBtn = document.getElementById("startBtn");
var submitBtn = document.querySelector("button.submitBtn")
var scoreEl = document.querySelector("#scoreboard");
var userForm = document.getElementById("userInfo");
var myQuestion = document.getElementById("questions");
var answerChoices = document.getElementById("answers");
var countDwn = document.getElementById("timer");
var secondsLeft = (questions.length * 10 + 1);
var currentQuestion = -1;

var questions
var initials;
var choices;
var answer;
var timer;
var time;




//Set timer and start quiz

function startTimer() {
// Hide questions until start button is clicked
  document.getElementById("home").classList.add('d-none');
  document.getElementById("quiz").classList.remove('d-none');

  
  time = 0
  setTimer();
// create questions to display to user
  askQuestions();
}

function setTimer() {
      
  
     timer = setInterval(function() {
        secondsLeft --;
        countDwn.textContent = "Time: " +  secondsLeft

      if (secondsLeft === 0 || currentQuestion === questions.length) {
          clearInterval(timer);
          setTimeout(displayScore, 500);
      }
  }, 1000);
}
startBtn.addEventListener("click", startTimer);

//Start Quiz
// Get questions from array
function askQuestions() {
  currentQuestion++;
  answer = questions[currentQuestion].answer

  myQuestion.textContent = questions[currentQuestion].title;
  answerChoices.innerHTML = "";

  var choices = questions[currentQuestion].choices;

  for (var i = 0; i < choices.length; i++) {
      var nextChoice = document.createElement("button");

      nextChoice.textContent = choices[i]
      answerBtn = answerChoices.appendChild(nextChoice).setAttribute("class",  "btn btn-dark btn-block");
  }
}
//Write function to display score
function displayScore() {
  document.getElementById("quiz").classList.add('d-none');
  document.getElementById("scoreBoard").classList.remove('d-none');
  userForm.textContent = "Your final score is " + secondsLeft + ".";
}
submitBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  addScore();
  
  window.location.href = "./assets/score.html"
});

function addScore () {
  initials = document.getElementById("urInitials").value
  
//We'll need a new object
var newScore = {
      name: initials,
      score: secondsLeft
  };
//Check for score in local storage or new array
  var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
//Push new score (adding new score)
  highScores.push(newScore)
//Turn objects into an array of strings then put it into local storage
  localStorage.setItem("highScores", JSON.stringify(highScores));

}
//Create function to tell users how they are doing
//feedback after question is answered
function hideFeedback(){
  var fdbk= document.getElementsByClassName("feedback")[0]
  fdbk.style.display='none'
}

function showFeedback(){
  var fdbk= document.getElementsByClassName("feedback")[0]
  fdbk.removeAttribute('style');
}

//If else
answerChoices.addEventListener("click", function (event) {
  var fdbk= document.getElementsByClassName("feedback")[0]
  
    if (answer === event.target.textContent) {   
      fdbk.innerHTML = "Correct!";
      setTimeout(hideFeedback,1000);
      secondsLeft = secondsLeft +10
      showFeedback();   
  } else {
      fdbk.innerHTML = "Sorry, incorrect.";
      setTimeout(hideFeedback,1000);
      secondsLeft = secondsLeft - 10;
      showFeedback();
  }    
  askQuestions();
});
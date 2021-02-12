// Set Variables

var start = document.getElementById("startButton");
var timer = document.getElementById("timer");
var count = document.getElementById("timerCount");
var quiz = document.getElementById("quiz");
var questions = document.getElementById("questions");
var result = document.getElementById("results");

//Initiate timer---start quiz btn (set timer paramaters)
//Function to create quiz
var currentQuest = 0;
var lastQuest = questions.length -1

function createQuiz() {
    
}
//Creat array with questions
var questions = [
     {
         question: "What are variables used for in JavaScript Programs?",
         A: "Storing numbers, dates, or other values",
         B: "Varying randomly.",
         C: "Causing high-school algebra flashbacks"
     }, 
     {
        Ans: "A"
        },
    {
        question: "What should appear at the very end of your JavaScript?",
        A: "The </script>",
        B: "The <script>",
        C: "The END statement"
    },
    {
        Ans: "A"
        },
    {
        question: "Which of the following is not a valid JavaScript variable name?",
        A: "2names",
        B: "_first_and_last_names",
        C: "FirstAndLast"
    },
    {
         Ans: "A"
        },
    {
        question: "Using _______ statement is how you test for a specific condition.",
        A: "Select",
        B: "If",
        C: "Switch",
    },
    {
         Ans: "B"
        },
    {
        question: "What is meant by *this* keyword in javascript?",
        A: "It refers current object",
        B: "It referes previous object",
        C: "It is variable which contains value",
    },
    {
        Ans:"A"
        }

//Store answer choices
//Function to generate results---check answer

// Store/Display user initials and score.
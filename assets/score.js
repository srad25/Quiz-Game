// highScores list needs to be turned back into object
    highScores = JSON.parse(localStorage.getItem("highScores") || "[]"),
    scoreUp = document.getElementById("scoreCard");
    
// Scores from high to low
    highScores.sort(function (a,b){
        return b.score - a.score
    })

// Display the scores
    for (var i = 0; i < highScores.length; i++) {
        var liTag = document.createElement("li")
        liTag.textContent = highScores[i].initials + "  " + highScores[i].score;
        scoreUp.appendChild(liTag);
    }

var restartBtn = document.querySelector("button.restartBtn");
    clearBtn = document.querySelector("button.clearBtn");

// Click to restart and clear scoreboard
clearBtn.addEventListener("click", function () {
    localStorage.clear();
    history.back()
});
restartBtn.addEventListener("click", function () {
    history.back();
}); 

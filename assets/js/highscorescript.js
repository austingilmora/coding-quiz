var restartButton = window.document.querySelector(".restart");
var scoreList = window.document.querySelector(".scorecard");

function populateScore() {
    for (var i = 0; i < scores.length; i++) {
        var row = document.createElement("li");
        row.innerHTML = "<p>Name: " + scores[i].nameInput + " Score: " + scores[i].score; + "</p>"
        scoreList.appendChild(row);
    }
}

function loadScores() {
    // get scores from local storage
    var savedScores = localStorage.getItem("scores");
    if (!savedScores) {
        return false;
    }
    else {
        scores = JSON.parse(savedScores);
    }

};


loadScores();
populateScore();
restartButton.addEventListener("click", function(){window.location.href = "./index.html"})
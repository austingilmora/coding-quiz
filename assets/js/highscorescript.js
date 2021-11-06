var restartButton = window.document.querySelector(".restart");
var scoreList = window.document.querySelector(".scorecard");

function populateScore() {
    // sort the scores
    scores = scores.sort(function(a, b){return b.score - a.score});

    for (var i = 0; i < scores.length; i++) {
        // make a list item
        var row = document.createElement("li");
        
        // put the scores objects in list items 
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
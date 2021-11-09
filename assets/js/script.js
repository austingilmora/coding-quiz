// get the start button
var startButton = window.document.querySelector(".start-btn");
var questionText = window.document.querySelector(".question-text");
var instructions = window.document.querySelector(".instructions");
var answerList = window.document.querySelector(".answer-list");
var quizBox = window.document.querySelector(".quiz-wrapper");
var quizTitle = window.document.querySelector(".quiz-title");
var ansA = window.document.querySelector("[data-choice='a']");
var ansB = window.document.querySelector("[data-choice='b']");
var ansC = window.document.querySelector("[data-choice='c']");
var ansD = window.document.querySelector("[data-choice='d']");
var questionCounter = 0;
var ansButtons = document.querySelectorAll(".ans-choice");
var timer = window.document.querySelector("#timer");
var highScoreList = window.document.querySelector(".highscore-list");
var scores = [];
var t = 75
var restartButton = window.document.querySelector(".restart");

// store questions and answers in array in html format the answers having an id saying if they 
// are right or wrong
var questions = [
    {
        ques: "Which of the following is NOT a JavaScript data type?",
        A: "Boolean",
        B: "String",
        C: "BigInt",
        D: "SmallInt",
        right: "SmallInt"
    },
    {
        ques: "What represents a strict equality comparison in JavaScript?",
        A: "=",
        B: "==",
        C: "===",
        D: "====",
        right: "==="
    },
    {
        ques: "Which of the following can be used to create a paragraph element in HTML?",
        A: "<para>",
        B: "<paragraph>",
        C: ">p<",
        D: "<p>",
        right: "<p>"
    },
    {
        ques: "Which of the following is a string?",
        A: "'Hello World'",
        B: "3",
        C: "var i = 0",
        D: "true",
        right: "'Hello World'"
    },
    {
        ques: "Which of the following creates a new header element in JavaScript?",
        A: "document.querySelector('header')",
        B: "document.createElement('h1')",
        C: "document.crateelement(<h1>)",
        D: "document.querySelector(h1)",
        right: "document.createElement('h1')"
    }
]

function timeScore() {

    var timeInterval = setInterval( function() {
        if (questionCounter >= questions.length) {
            timer.textContent = t
            clearInterval(timeInterval);
        }
        if (t <= -1) {
            answerList.remove();
            questionText.textContent = "YOU ARE OUT OF TIME!";
            questionText.classList.add("dangerzone");
            restartButton.classList.remove("hidden");
            restartButton.addEventListener("click", function(){window.location.href = "./index.html"});
        }
        else if (t >= 0) {
            timer.textContent = t
            t--;
        }
        return t
    }, 1000);
    return t
};


// START BUTTON
var startQuiz = function() {
    
    //start the timer
    timeScore();
    //remove quiz title
    quizTitle.remove();
    
    // clear the <p> section
    instructions.remove();
    // reveal buttons
    quizBox.classList.remove("hidden");
    startButton.remove();
    
    // start the newQ function
    loadQuestion();
}
// CLICK QUESTION FUNCTION

// On a click look for the id

ansButtons.forEach(function (guess) {
    guess.addEventListener('click', function() {
        // if the question is right, load the new question and add 1 to question counter
        if(this.textContent === questions[questionCounter].right) {
            questionCounter++;
            loadQuestion();
            document.querySelector(".right").classList.remove("hidden");
            return questionCounter;
        }
        // if the question is wrong, load the new question and add 1 to questionCounter,
        // THEN TAKE AWAY 10 FROM THE TIME
        if(this.textContent != questions[questionCounter].right) {
            t = t - 10;
            questionCounter++;
            console.log("line 123 " + t);
            loadQuestion();
            document.querySelector(".wrong").classList.remove("hidden");
            return questionCounter;
        }
        return questionCounter;
    });
});

ansButtons.forEach(function (guess) {
    guess.addEventListener('mouseover', function() {
        document.querySelector(".right").classList.add("hidden");
        document.querySelector(".wrong").classList.add("hidden");
    });
});

// NEW QUESTION FUNCTION
function loadQuestion() {
    if(questionCounter >= questions.length){
        questionText.remove();
        answerList.remove();
        console.log("line 144 " + t)
        recordScore();
        console.log("line 146 " + t)
        window.location.href = "./highscores.html"
    }
    else{
        // take the question and put it in the <h1>
        questionText.textContent = questions[questionCounter].ques;
        // take the answers and put them into buttons 
        ansA.textContent = questions[questionCounter].A;
        ansB.textContent = questions[questionCounter].B;
        ansC.textContent = questions[questionCounter].C;
        ansD.textContent = questions[questionCounter].D;
    }
};

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

function recordScore() {
    var playerName = window.prompt("What is your name?");
    while (!playerName || playerName === null){
        window.alert("Please enter your name");
        playerName = window.prompt("what is your name?")
    }
    var playerScore = {
        nameInput: playerName,
        score: t
    };
    
    scores.push(playerScore);
    localStorage.setItem("scores", JSON.stringify(scores));
};


//if it is right, run the New question function and set <h2> below to say RIGHT!

// if it is wrong, subtract 10 from the timer and run the New Q function, set <h2> below to say Wrong

// if there are no more q/a in the array, record the time, go to the highscore page and enter the highscore

loadScores()
startButton.addEventListener("click", startQuiz);
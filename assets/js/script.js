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

// store questions and answers in array in html format the answers having an id saying if they 
// are right or wrong
var questions = [
    {
        ques: "Why did the Chicken cross the road?",
        A: "To get to the other side",
        B: "To meet his flatmate",
        C: "Because the KFC was there",
        D: "Fuck you, Austin",
        right: "To meet his flatmate"
    },
    {
        ques: "Why did the Chicken cross the road222?",
        A: "To get to the other side222",
        B: "To meet his flatmate222",
        C: "Because the KFC was there222",
        D: "Fuck you, Austin222",
        right: "To meet his flatmate222"
    },
    {
        ques: "Why did the Chicken cross the road333?",
        A: "To get to the other side333",
        B: "To meet his flatmate333",
        C: "Because the KFC was there333",
        D: "Fuck you, Austin333",
        right: "To meet his flatmate333"
    },
    {
        ques: "Why did the Chicken cross the road?444",
        A: "To get to the other side444",
        B: "To meet his flatmate444",
        C: "Because the KFC was there444",
        D: "Fuck you, Austin444",
        right: "To meet his flatmate444"
    },
    {
        ques: "Why did the Chicken cross the road?",
        A: "To get to the other side",
        B: "To meet his flatmate",
        C: "Because the KFC was there",
        D: "Fuck you, Austin",
        right: "To meet his flatmate"
    }
]

function timeScore() {

    var timeInterval = setInterval( function() {
        if (questionCounter >= questions.length) {
            clearInterval(timeInterval);
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
        recordScore();
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
        score: timer.textContent
    };
    
    scores.push(playerScore);
    localStorage.setItem("scores", JSON.stringify(scores));
    console.log(localStorage)
}


//if it is right, run the New question function and set <h2> below to say RIGHT!

// if it is wrong, subtract 10 from the timer and run the New Q function, set <h2> below to say Wrong

// if there are no more q/a in the array, record the time, go to the highscore page and enter the highscore

loadScores()
startButton.addEventListener("click", startQuiz);
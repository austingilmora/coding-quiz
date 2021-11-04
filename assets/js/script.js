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
    }
]

// START BUTTON
var startQuiz = function() {
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




// NEW QUESTION FUNCTION
function loadQuestion() {
    // grab new q/a out of the array 
    var i =0;
    
    // take the question and put it in the <h1>
    questionText.textContent = questions[i].ques;
    ansA.textContent = questions[i].A;
    ansB.textContent = questions[i].B;
    ansC.textContent = questions[i].C;
    ansD.textContent = questions[i].D;

    // take the answers and put them into buttons 
}



// CLICK QUESTION FUNCTION

// On a click look for the id

//if it is right, run the New question function and set <h2> below to say RIGHT!

// if it is wrong, subtract 10 from the timer and run the New Q function, set <h2> below to say Wrong

// if there are no more q/a in the array, record the time, go to the highscore page and enter the highscore


startButton.addEventListener("click", startQuiz);
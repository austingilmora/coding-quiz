// get the start button
var startButton = window.document.querySelector(".start-btn");
var questionText = window.document.querySelector(".question-text");
var instructions = window.document.querySelector(".instructions");
var answerList = window.document.querySelector(".answer-list");

// store questions and answers in array in html format the answers having an id saying if they 
// are right or wrong

// START BUTTON
var startQuiz = function() {
    // put question in the <h1>
    questionText.textContent = "Why did the chicken cross the road?";

    // clear the <p> section
    instructions.remove();
    // add 4 buttons (inside divs?)
    var answerChoices = document.createElement("button")

    // start the newQ function
    
}




// NEW QUESTION FUNCTION

// grab new q/a out of the array 

// take the question and put it in the <h1>

// take the answers and put them into buttons 

// CLICK QUESTION FUNCTION

// On a click look for the id

//if it is right, run the New question function and set <h2> below to say RIGHT!

// if it is wrong, subtract 10 from the timer and run the New Q function, set <h2> below to say Wrong

// if there are no more q/a in the array, record the time, go to the highscore page and enter the highscore


startButton.addEventListener("click", startQuiz);
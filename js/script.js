const body = document.querySelector("body");
body.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    return false;
});

body.addEventListener("copy", function (e) {
    e.preventDefault();
});

document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === 'hidden') {
         //   window.close();
        console.log(window);
    }
});
const quizData = [
     {
         question:  "What is the capital city of Nigeria?",
         options: ["(a) Abuja", " (b) Berlin", " (c) Madrid", " (d) Lagos"],
         correctAnswer: "(a) Abuja"
     },
     {
         question: "Which programming language is used for backend?",
         options: ["(a)All of the above", "(b) Python", " (C) JavaScript", "(d) C#"],
         correctAnswer: "(a)All of the above"
     },
     {
         question: "What is the largest mountain?",
         options: ["(a)Everest", "(b) kilimangaro", " (C) Giraffe", "(d) Hippopotamus"],
         correctAnswer: "(b) kilimangaro"
     },
     {
         question: "Which is a planet?",
         options: ["(a)Venus", "(b) Mars", " (C) Jupiter", "(d) All of the Above"],
         correctAnswer: "(d) All of the Above"
     },
     {
         question: "What is the first Alphabet?",
         options: ["(a) B", "(b) S", " (C) T", "(d) A"],
         correctAnswer: "(d) A"
     },
     {
         question: " zoetech is located in?",
         options: ["(a)Jaiye", "(b) Seoul", " (C) duste", "(d) gwagwalada"],
         correctAnswer: "(a)Jaiye"
     },
         {
             question: "What is the capital city of France?",
             options: ["(a) Paris", "(b) London", "(c) Berlin", "(d) Rome"],
             correctAnswer: "(a) Paris"
         },
         {
             question: "Which programming language is known for building dynamic web pages?",
             options: ["(a) Java", "(b) PHP", "(c) JavaScript", "(d) Python"],
             correctAnswer: "(c) JavaScript"
         },
         {
             question: "What is the largest ocean on Earth?",
             options: ["(a) Atlantic Ocean", "(b) Indian Ocean", "(c) Southern Ocean", "(d) Pacific Ocean"],
             correctAnswer: "(d) Pacific Ocean"
         },
         {
             question: "How many continents are there in the world?",
             options: ["(a) 5", "(b) 6", "(c) 7", "(d) 8"],
             correctAnswer: "(c) 7"
         },
         {
             question: "Which is the smallest prime number?",
             options: ["(a) 0", "(b) 1", "(c) 2", "(d) 3"],
             correctAnswer: "(c) 2"
         },
         {
             question: "In which year did the Titanic sink?",
             options: ["(a) 1905", "(b) 1912", "(c) 1920", "(d) 1935"],
             correctAnswer: "(b) 1912"
         },
         {
             question: "What is the currency of Japan?",
             options: ["(a) Yen", "(b) Euro", "(c) Dollar", "(d) Peso"],
             correctAnswer: "(a) Yen"
         },
         {
             question: "Who wrote 'Romeo and Juliet'?",
             options: ["(a) William Shakespeare", "(b) Jane Austen", "(c) Charles Dickens", "(d) Mark Twain"],
             correctAnswer: "(a) William Shakespeare"
         },
             {
                 question: "What is the capital city of Australia?",
                 options: ["(a) Sydney", "(b) Melbourne", "(c) Canberra", "(d) Brisbane"],
                 correctAnswer: "(c) Canberra"
             },
             {
                 question: "Which planet is known as the 'Red Planet'?",
                 options: ["(a) Venus", "(b) Mars", "(c) Jupiter", "(d) Saturn"],
                 correctAnswer: "(b) Mars"
             },
             {
                 question: "What is the main component of Earth's atmosphere?",
                 options: ["(a) Oxygen", "(b) Nitrogen", "(c) Carbon Dioxide", "(d) Hydrogen"],
                 correctAnswer: "(b) Nitrogen"
             },
             {
                 question: "In which year did the United States declare independence?",
                 options: ["(a) 1776", "(b) 1789", "(c) 1801", "(d) 1812"],
                 correctAnswer: "(a) 1776"
             },
             {
                 question: "Who developed the theory of relativity?",
                 options: ["(a) Isaac Newton", "(b) Albert Einstein", "(c) Galileo Galilei", "(d) Nikola Tesla"],
                 correctAnswer: "(b) Albert Einstein"
             },
             {
                 question: "What is the currency of Brazil?",
                 options: ["(a) Peso", "(b) Real", "(c) Euro", "(d) Rupee"],
                 correctAnswer: "(b) Real"
             },
             {
                 question: "Which ocean is the largest by size?",
                 options: ["(a) Atlantic Ocean", "(b) Indian Ocean", "(c) Southern Ocean", "(d) Pacific Ocean"],
                 correctAnswer: "(d) Pacific Ocean"
             },
             {
                 question: "What is the capital city of Japan?",
                 options: ["(a) Beijing", "(b) Tokyo", "(c) Seoul", "(d) Bangkok"],
                 correctAnswer: "(b) Tokyo"
             },
             {
                 question: "Who painted the Mona Lisa?",
                 options: ["(a) Vincent van Gogh", "(b) Pablo Picasso", "(c) Leonardo da Vinci", "(d) Michelangelo"],
                 correctAnswer: "(c) Leonardo da Vinci"
             },
             {
                 question: "What is the largest mammal on Earth?",
                 options: ["(a) Elephant", "(b) Blue Whale", "(c) Giraffe", "(d) Lion"],
                 correctAnswer: "(b) Blue Whale"
             },
          
         ];


const quizDuration = 30; // 30 seconds per question
let currentQuestion = 0;
let score = 0;
let timeRemaining = quizDuration;
let timerInterval;



function loadQuestion() {
 const questionContainer = document.getElementById('question-container');
 const optionsContainer = document.getElementById('options-container');
 const nextButton = document.getElementById('next-btn');
 const submitButton = document.getElementById('submit-btn');

 nextButton.style.display = 'none';
 submitButton.style.display = 'none';

 const currentQuizData = quizData[currentQuestion];

 questionContainer.innerText = currentQuizData.question;
 optionsContainer.innerHTML = '';

 currentQuizData.options.forEach((option, index) => {
     const optionElement = document.createElement('div');
     optionElement.classList.add('option');
     optionElement.innerText = option;
     optionElement.addEventListener('click', () => selectAnswer(index));
     optionsContainer.appendChild(optionElement);
 });

 startTimer(); // Start the timer for each new question
}

function selectAnswer(selectedIndex) {
 const currentQuizData = quizData[currentQuestion];
 const selectedOption = currentQuizData.options[selectedIndex];

 if (selectedOption === currentQuizData.correctAnswer) {
     score++;
 }

 currentQuestion++;

 if (currentQuestion < quizData.length) {
     loadQuestion();
 } else {
     showResults();
 }
}

// quiz.js

// Function to show the logout button
function showLogoutButton() {
 document.getElementById('logoutBtn').style.display = 'block';
}

// Function to hide the logout button
function hideLogoutButton() {
 document.getElementById('logoutBtn').style.display = 'none';
}

// Other quiz-related functions...

// Function to show the results and display the logout button
function showResults() {
 clearInterval(timerInterval);
 const quizContainer = document.getElementById('quiz-container');
 const resultContainer = document.createElement('div');
 const scoreDisplay = document.createElement('p');
 const loginButton = document.getElementById('loginBtn');


 // Calculate the score percentage
 const percentage = (score / quizData.length) * 100;

 // Display the score
 scoreDisplay.textContent = `You scored ${score} out of ${quizData.length} (${percentage.toFixed(2)}%)`;

 // Append the score display to the result container
 resultContainer.appendChild(scoreDisplay);

 // Append the result container to the quiz container
 quizContainer.innerHTML = ''; // Clear the quiz container
 quizContainer.appendChild(resultContainer);
}



function submitAnswer() {
 const selectedOption = document.querySelector('.option.selected');
 const nextButton = document.getElementById('next-btn');
 const logButton = document.getElementById('logoutLink');

 if (selectedOption) {
     const selectedIndex = Array.from(selectedOption.parentNode.children).indexOf(selectedOption);
     selectAnswer(selectedIndex);

     // Show the next button after an option is selected
     nextButton.style.display = 'block';
 }
}

function goToNextQuestion() {
 const nextButton = document.getElementById('next-btn');
 const submitButton = document.getElementById('submit-btn');
 const logButton = document.getElementById('logoutLink');
 if (currentQuestion === quizData.length - 1) {
     nextButton.style.display = 'none';
     submitButton.style.display = 'block';
 } else {
     nextButton.style.display = 'none';
     loadQuestion();
 }
}

function startTimer() {
 timeRemaining = quizDuration; // Reset the timer for each new question

 timerInterval = setInterval(() => {
     timeRemaining--;

     const seconds = timeRemaining % 60;

     document.getElementById('timer').textContent = `00:${String(seconds).padStart(2, '0')}`;

     if (timeRemaining <= 0) {
         clearInterval(timerInterval);
         selectAnswer(-1); // Move to the next question when time elapses
     }
 }, 1000);
}

function resetQuiz() {
 currentQuestion = 0;
 score = 0;
 timeRemaining = quizDuration;

 clearInterval(timerInterval);

 loadQuestion();
}

// Load the first question and start the timer when the page loads
resetQuiz();


// script.js

// Define quiz data and other variables...

// document.addEventListener("DOMContentLoaded", function() {

//     const greetContainer = document.getElementById('greet');
//     const quizContainer = document.getElementById('quiz-container');
//     loginBtn.style.display =none
//     loginButton.addEventListener('click', function() {
//         const email = document.getElementById('email').value;
//         const password = document.getElementById('password').value;
    
//         // Perform login validation here (e.g., validate credentials against a database)
//         if (email === 'email' && password === 'password') {
//             greetContainer.innerText = 'Welcome!'; // Display welcome message
//             quizContainer.style.display = 'block'; // Show quiz container
//             showLogoutButton(); // Show logout button
//         } else {
//             alert('Invalid credentials. Please try again.');
//         }
//     });

//     const logoutButton = document.getElementById('logoutBtn');
//     if (logoutButton) {
//         logoutButton.addEventListener('click', function(event) {
//             event.preventDefault();
//             // Perform logout actions (clear session, redirect to login page, etc.)
//             greetContainer.innerText = ''; // Clear welcome message
//             quizContainer.style.display = 'none'; // Hide quiz container
//             hideLogoutButton(); // Hide logout button
//         });
//     } else {
//         console.error("Logout button not found!");
//     }
// });

// // Define other quiz-related functions...






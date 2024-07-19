const quizData = [
  {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "Madrid", "Rome"],
      answer: "Paris"
  },
  {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Jupiter", "Saturn", "Earth"],
      answer: "Mars"
  },
  {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "Jane Austen", "Mark Twain", "Charles Dickens"],
      answer: "Harper Lee"
  },
  // Add more questions as needed
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const scoreContainer = document.getElementById('score');

let currentQuestion = 0;
let score = 0;
let quizOver = false;

// Function to load quiz questions and options
function loadQuiz() {
  if (currentQuestion >= quizData.length) {
      quizOver = true;
      showResults();
      return;
  }

  const question = quizData[currentQuestion];
  const options = question.options.map((option, index) => `
      <li>
          <input type="radio" id="option${index}" name="answer" value="${option}">
          <label for="option${index}">${option}</label>
      </li>
  `).join('');

  quizContainer.innerHTML = `
      <div class="question">${question.question}</div>
      <ul class="options">${options}</ul>
      <button onclick="checkAnswer()">Next</button>
  `;
}

// Function to check selected answer
function checkAnswer() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (!selectedOption) {
      alert('Please select an option!');
      return;
  }

  if (selectedOption.value === quizData[currentQuestion].answer) {
      score++;
  }

  currentQuestion++;
  loadQuiz();
}

// Function to display quiz results
function showResults() {
  resultContainer.style.display = 'block';
  scoreContainer.textContent = `You scored ${score} out of ${quizData.length}`;
}

// Function to reset quiz
function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  quizOver = false;
  resultContainer.style.display = 'none';
  loadQuiz();
}

// Load the initial quiz
loadQuiz();
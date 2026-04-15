const startBtn = document.getElementById('start-btn');
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');

startBtn.addEventListener('click', function () {
    startScreen.style.display = 'none';
    quizScreen.style.display = 'flex';
});

const questions = [
    {
        question: "What is the capital of Philippines?",
        choices: ["Bandar Seri Begawan", "Kuala Lumpur", "Manila", "Filipina"],
        answer: "Manila"
    },
    {
        question: "How can Tagum City be improved?",
        choices: ["More parks and recreational areas", "Better public transportation", "Improved waste management", "Enhanced public safety measures"],
        answer: "Better public transportation"
    },
    {
        question: "What should Mindanaon people do to become successful in the near future?",
        choices: ["Focus on education", "Start their own businesses", "Ban Tangalogs", "Embrace technology"],
        answer: "Ban Tangalogs"
    },
    {
        question: "What company should I apply internship for?",
        choices: ["AGSouth", "AIMHI", "Agridom", "Ollopa", "Depends on your heart"],
        answer: "Depends on your heart"
    },
    {
        question: "What is the best way to learn programming?",
        choices: ["Online courses", "Coding bootcamps", "Practice and build projects", "Read programming books"],
        answer: "Practice and build projects"
    }
]

const scoreFeedback = [
    {
        score: 0,
        feedback: "Don't worry, keep trying and you'll get better!"
    },
    {
        score: 1,
        feedback: "Not bad, but there's room for improvement!"
    },
    {
        score: 2,
        feedback: "Good job! You're on the right track!"
    },
    {
        score: 3,
        feedback: "Great work! You're doing really well!"
    },
    {
        score: 4,
        feedback: "Excellent! You're a quiz master!"
    },
    {
        score: 5,
        feedback: "Perfect score! You're a genius!"
    }

]



let currentQuestion = 0;
let currentScore = 0;

const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
function loadQuestion(questionObj) {
    questionText.innerText = questionObj.question;
    answersContainer.innerHTML = '';
    questionObj.choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.innerText = choice
        btn.classList.add('answer-btn');
        answersContainer.appendChild(btn);
        btn.addEventListener('click', function () {
            if (btn.innerText == questionObj.answer) {
                btn.classList.add('correct');
                const score = document.getElementById('score')
                currentScore++
                score.innerText = currentScore;
            } else {
                btn.classList.add('incorrect');
                const allButtons = answersContainer.querySelectorAll('.answer-btn');
                allButtons.forEach(function (button) {
                    if (button.innerText == questionObj.answer) {
                        button.classList.add('correct');
                    }
                });
            }
            setTimeout(function () {
                currentQuestion++;
                progressBar.style.width = (currentQuestion / questions.length) * 100 + "%";

                currentQuestionText = document.getElementById('current-question');
                currentQuestionText.innerText = currentQuestion + 1;

                if (currentQuestion >= questions.length) {
                    const totalScore = document.getElementById('final-score');
                    totalScore.innerText = currentScore;

                    const feedbackText = document.getElementById('result-message');
                    feedbackText.innerText = scoreFeedback[currentScore].feedback;

                    quizScreen.style.display = 'none';
                    const endQuiz = document.getElementById('quiz-results');
                    endQuiz.style.display = 'flex';
                }

                loadQuestion(questions[currentQuestion]);
            }, 1000);
        });
    });
}
loadQuestion(questions[0]);

const restartBtn = document.getElementById('restart-btn');
restartBtn.addEventListener('click', function () {
    currentQuestion = 0;
    currentScore = 0;
    const endQuiz = document.getElementById('quiz-results');
    endQuiz.style.display = 'none';
    const startQuiz = document.getElementById('start-screen');
    startQuiz.style.display = 'flex';
    const currentQuestionText = document.getElementById('current-question');
    currentQuestionText.innerText = 1;
    progressBar.style.width = '0%';
    let score = document.getElementById('score');
    score.innerText = 0;
    loadQuestion(questions[0]);
});


const progress = document.getElementById('progress-bar');
let progressBar = document.createElement('div');
progressBar.classList.add('progress');
progressBar.style.width = '0%';
progress.appendChild(progressBar);


const totalQuestions = document.querySelectorAll('.total-question');
totalQuestions.forEach(span => {
    span.innerText = questions.length;
})





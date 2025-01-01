let currentQuestionIndex = 0;
const questions = [
    { value: 42, type: 'int' },
    { value: 3.14, type: 'float' },
    { value: 'Hello, world!', type: 'string' },
    { value: true, type: 'bool' },
    { value: -7, type: 'int' }
];

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('value').innerText = question.value;
}

function checkAnswer() {
    const userAnswer = document.getElementById('userAnswer').value.toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].type;

    const feedback = document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        feedback.innerText = 'Bravo ! Bonne réponse.';
        feedback.style.color = 'green';
    } else {
        feedback.innerText = `Désolé, la bonne réponse était ${correctAnswer}.`;
        feedback.style.color = 'red';
    }
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        document.getElementById('userAnswer').value = '';
        document.getElementById('feedback').innerText = '';
        displayQuestion();
    } else {
        document.getElementById('question').innerText = 'Vous avez terminé !';
        document.getElementById('value').innerText = '';
        document.getElementById('userAnswer').style.display = 'none';
        document.querySelector('button').style.display = 'none';
    }
}

displayQuestion();

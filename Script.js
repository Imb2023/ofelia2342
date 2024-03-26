const questions = [
    {
        question: "What is 2+2?",
        answers: ["2", "3", "4", "5"],
        correct: "4"
    },
    {
        question: "Capital of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correct: "Paris"
    }
    // Add more questions here
];

function displayQuestion() {
    const qIndex = Math.floor(Math.random() * questions.length);
    const q = questions[qIndex];

    document.getElementById('question').innerText = q.question;
    const answersEl = document.getElementById('answers');
    answersEl.innerHTML = ""; // Clear previous answers

    q.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.onclick = () => checkAnswer(answer, q.correct);
        answersEl.appendChild(button);
    });
}

function checkAnswer(selected, correct) {
    const resultEl = document.getElementById('result');
    if (selected === correct) {
        resultEl.innerText = "Correct!";
    } else {
        resultEl.innerText = "Wrong answer. Try again!";
    }

    setTimeout(displayQuestion, 2000); // Display next question after 2 seconds
}

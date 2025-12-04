let questions = [
    "Who is the author of The Striker?",
    "Who is the current president of India?",
    "27+73?",
    "Which team won the World cup last?",
    "Who created Marvels?"
]

let answers = [
    "Ana Huang",
    "Smt. Draupadi Murmu",
    "100",
    "India",
    "Stan Lee"
];

let score = 0;

for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i]);
    userAnswer = userAnswer.toLowerCase().trim();

    if (userAnswer === answers[i]) {
        alert("Correct!");
        score++;
    } else {
        alert("Wrong! Correct answer: " + answers[i]);
    }
}

alert("Final Score: " + score + " / " + questions.length);
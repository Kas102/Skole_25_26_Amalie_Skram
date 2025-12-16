let currentNumber;
let score = 0;
let gameOver = false;

function startGame() {
    score = 0;
    gameOver = false;

    document.getElementById("score").textContent = score;
    document.getElementById("result").textContent = "";

    currentNumber = getRandomNumber();
    document.getElementById("current-number").textContent = currentNumber;

    // Start med grønn farge
    document.getElementById("current-number").style.color = "green";

    // Aktiver knappene
    document.getElementById("higher-btn").disabled = false;
    document.getElementById("lower-btn").disabled = false;
}

function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function guess(choice) {
    if (gameOver) return;

    const nextNumber = getRandomNumber();
    const resultText = document.getElementById("result");
    const numberBox = document.getElementById("current-number");

    const correct =
        (choice === "higher" && nextNumber > currentNumber) ||
        (choice === "lower" && nextNumber < currentNumber);

    if (correct) {
        score++;
        resultText.textContent = `Riktig! Det nye tallet var ${nextNumber}`;
        document.getElementById("score").textContent = score;
        numberBox.style.color = "green"; 
    } else {
        resultText.textContent = `Du tapte! Det nye tallet var ${nextNumber}`;

        
        numberBox.style.color = "red";

        
        document.getElementById("higher-btn").disabled = true;
        document.getElementById("lower-btn").disabled = true;

        gameOver = true;
    }

    currentNumber = nextNumber;
    numberBox.textContent = currentNumber;
}

window.onload = startGame;
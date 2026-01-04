let currentNumber;  // Nåværende tall
let score = 0;  // Spillpoeng
let gameOver = false;   // Spillstatus

function startGame() {  // Starter spillet
    score = 0;  // Resetter poeng
    gameOver = false;   // Resetter spillstatus

    document.getElementById("score").textContent = score;   // Oppdaterer poengvisning
    document.getElementById("result").textContent = ""; // Resetter resultatvisning

    currentNumber = getRandomNumber();  // Genererer en tilfeldig tall
    document.getElementById("current-number").textContent = currentNumber;  // Viser det nåværende tallet

   
    document.getElementById("current-number").style.color = "green"; //setter farge til grønn

    // Aktiver knappene
    document.getElementById("higher-btn").disabled = false; // Aktiverer høyere-knappen
    document.getElementById("lower-btn").disabled = false; // Aktiverer lavere-knappen
}

function getRandomNumber() {  // Genererer et tilfeldig tall mellom 1 og 100
    return Math.floor(Math.random() * 100) + 1; // Returnerer et tilfeldig tall mellom 1 og 100
}

function guess(choice) {    // Håndterer spillerens gjetning
    if (gameOver) return;   // Hvis spillet er over gjør ingenting

    const nextNumber = getRandomNumber();       // Genererer neste tall
    const resultText = document.getElementById("result");   // Henter resultatvisningselementet
    const numberBox = document.getElementById("current-number");    // Henter tallvisningselementet

    const correct =
        (choice === "higher" && nextNumber > currentNumber) ||  // Sjekker om gjetningen er korrekt
        (choice === "lower" && nextNumber < currentNumber); // Sjekker om gjetningen er korrekt

    if (correct) {
        score++;    // Øker poengsummen ved korrekt gjetning
        resultText.textContent = `Riktig! Det nye tallet var ${nextNumber}`;    // Viser riktig resultat
        document.getElementById("score").textContent = score;   // Oppdaterer poengvisning
        numberBox.style.color = "green";    //setter farge til grønn
    } else {
        resultText.textContent = `Du tapte! Det nye tallet var ${nextNumber}`;  // Viser feil resultat

        
        numberBox.style.color = "red"; //setter farge til rød

        
        document.getElementById("higher-btn").disabled = true; // Deaktiverer høyere-knappen
        document.getElementById("lower-btn").disabled = true;   // Deaktiverer lavere-knappen

        gameOver = true;    // Setter spillstatus til over
    }

    currentNumber = nextNumber; // Oppdaterer det nåværende tallet
    numberBox.textContent = currentNumber;  // Viser det nye nåværende tallet
}

window.onload = startGame;  // Starter spillet når siden lastes inn
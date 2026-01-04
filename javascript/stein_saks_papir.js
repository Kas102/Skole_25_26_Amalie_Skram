const choices = ["stein", "saks", "papir"]; // Mulige valg
const playerDisplay = document.getElementById("playerDisplay"); // Henter spillerens valg element
const computerDisplay = document.getElementById("computerDisplay"); // Henter datamaskinens valg element
const resultDisplay = document.getElementById("resultDisplay"); // Henter resultat element

function playGame(playerChoice){    // Funksjon for å spille spillet

    const computerChoice = choices[Math.floor(Math.random() * 3)]; // Datamaskinens valg

    console.log(computerChoice);    // Logger datamaskinens valg til konsollen

    let result = "";   // Variabel for resultatet

    if(playerChoice === computerChoice){    // Sjekker for uavgjort
        result = "Likt!";   // Setter resultat til uavgjort
    }
    else{   // Sjekker for vinn eller tap
        switch(playerChoice){   // Sjekker spillerens valg
            case "stein":   // Hvis spillerens valg er stein
                result = (computerChoice === "saks") ? "DU VANT!" : "DU TAPTE!";    // Setter resultat basert på datamaskinens valg
                break;  // Avslutter case
            case "saks":   // Hvis spillerens valg er saks
                result = (computerChoice === "papir") ? "DU VANT!" : "DU TAPTE!";    // Setter resultat basert på datamaskinens valg
                break;  // Avslutter case
            case "papir": // Hvis spillerens valg er papir
                result = (computerChoice === "stein") ? "DU VANT!" : "DU TAPTE!";   // Setter resultat basert på datamaskinens valg
                break;  // Avslutter case
        }
    }

    playerDisplay.textContent = `DEG: ${playerChoice}`; // Viser spillerens valg
    computerDisplay.textContent = `DATAMASKIN: ${computerChoice}`; // Viser datamaskinens valg
    resultDisplay.textContent = result; // Viser resultatet

}

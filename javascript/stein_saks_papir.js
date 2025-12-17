const choices = ["stein", "saks", "papir"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    console.log(computerChoice);

    let result = "";

    if(playerChoice === computerChoice){
        result = "Likt!"
    }
    else{
        switch(playerChoice){
            case "stein":
                result = (computerChoice === "saks") ? "DU VANT!" : "DU TAPTE!";
                break;
            case "saks":
                result = (computerChoice === "papir") ? "DU VANT!" : "DU TAPTE!";
                break;
            case "papir":
                result = (computerChoice === "stein") ? "DU VANT!" : "DU TAPTE!";
                break;
        }
    }

    playerDisplay.textContent = `DEG: ${playerChoice}`;
    computerDisplay.textContent = `DATAMASKIN: ${computerChoice}`;
    resultDisplay.textContent = result;

}

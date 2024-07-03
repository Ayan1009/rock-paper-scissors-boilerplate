const paperButton = document.getElementById("paper-button");
const rockButton = document.getElementById("rock-button");
const scissorsButton = document.getElementById("scissors-button");
const playerChoiceImage = document.getElementById("player-choice");
const computerChoiceImage = document.getElementById("computer-choice");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const resultMessage = document.getElementById("result-message");

let playerTotal = 0;
let computerTotal = 0;
let gameEnded = false;

function playGame(playerChoice, playerImgSrc) {
    if (gameEnded) return;

    playerChoiceImage.src = playerImgSrc;
    const computerChoice = getComputerChoice();

    if (playerTotal >= 5) {
        resultMessage.innerHTML = "You won the game";
        gameEnded = true;
    } else if (computerTotal >= 5) {
        resultMessage.innerHTML = "Computer won the game";
        gameEnded = true;
    }

    if (gameEnded) {
        paperButton.disabled = true;
        rockButton.disabled = true;
        scissorsButton.disabled = true;
        return;
    }

    if (playerChoice === computerChoice) {
        // Tie game logic
    } else if (
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerTotal++;
        playerScore.innerHTML = playerTotal;
    } else {
        computerTotal++;
        computerScore.innerHTML = computerTotal;
    }
}

paperButton.onclick = function() {
    playGame("paper", "./assets/paper-hand.png");
};

rockButton.onclick = function() {
    playGame("rock", "./assets/rock-hand.png");
};

scissorsButton.onclick = function() {
    playGame("scissors", "./assets/scissors-hand.png");
};

const choices = ["paper", "rock", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    computerChoiceImage.src = `./assets/${computerChoice}-hand.png`;
    return computerChoice;
}

const playAgainButton = document.getElementById("play-again-button");
playAgainButton.onclick = function() {
    window.location.href = "game.html";
}

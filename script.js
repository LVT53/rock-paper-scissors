let calculateNumber;
let humanChoice;
let anyHumanChoice
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(max) {
    calculateNumber = Math.floor(Math.random() * max);
    if (calculateNumber === 0) {
        return "rock";
    } else if (calculateNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    humanChoice = prompt("Rock, paper or scissors?","");
    anyHumanChoice = humanChoice.toLowerCase();
    return anyHumanChoice;
}

function playRound(anyHumanChoice, computerChoice) {
    if (anyHumanChoice === "rock" && calculateNumber === 0) {
        alert("It's a tie!");
    } else if (anyHumanChoice === "rock" && calculateNumber === 1) {
        alert("You lost!");
        computerScore++;
    } else if (anyHumanChoice === "rock" && calculateNumber === 2) {
        alert("You won!");
        humanScore++;
    } else if (anyHumanChoice === "paper" && calculateNumber === 0) {
        alert("You won!");
        humanScore++;
    } else if (anyHumanChoice === "paper" && calculateNumber === 1) {
        alert("It's a tie!");
    } else if (anyHumanChoice === "paper" && calculateNumber === 2) {
        alert("You lost!");
        computerScore++;
    } else if (anyHumanChoice === "scissors" && calculateNumber === 0) {
        alert("You lost!");
        computerScore++;
    } else if (anyHumanChoice === "scissors" && calculateNumber === 1) {
        alert("You won!");
        humanScore++;
    } else if (anyHumanChoice === "scissors" && calculateNumber === 2) {
        alert("It's a tie!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(3);

playRound(humanSelection, computerSelection);
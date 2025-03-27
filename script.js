let calculateNumber;
let humanChoice;
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
console.log(getComputerChoice(3));
console.log(getHumanChoice())
function getHumanChoice() {
    humanChoice = prompt("Rock, paper or scissors?","");
    if (humanChoice === "rock" && calculateNumber === 0) {
        alert("It's a tie!");
    } else if (humanChoice === "rock" && calculateNumber === 1) {
        alert("You lost!");
    } else if (humanChoice === "rock" && calculateNumber === 2) {
        alert("You won!");
    } else if (humanChoice === "paper" && calculateNumber === 0) {
        alert("You won!");
    } else if (humanChoice === "paper" && calculateNumber === 1) {
        alert("It's a tie!");
    } else if (humanChoice === "paper" && calculateNumber === 2) {
        alert("You lost!");
    } else if (humanChoice === "scissors" && calculateNumber === 0) {
        alert("You lost!");
    } else if (humanChoice === "scissors" && calculateNumber === 1) {
        alert("You won!");
    } else if (humanChoice === "scissors" && calculateNumber === 2) {
        alert("It's a tie!");
    }
}
function getComputerChoice(max) {
    let calculateNumber = Math.floor(Math.random() * max);
    if (calculateNumber === 0) {
        return "rock";
    } else if (calculateNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
console.log(getComputerChoice(3));
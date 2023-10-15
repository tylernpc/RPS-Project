function getComputerChoice() {
    computerChoices = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomChoice];
}

const computerChoice = getComputerChoice();
console.log(computerChoice);


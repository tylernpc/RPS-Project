let computerChoice;

function getComputerChoice() {
    computerChoices = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomChoice];
}

function reset() {
    computerChoice = getComputerChoice();
}

function resultText(result) {
    document.getElementById('result').innerHTML = result;
}

function userInput(userChoice) {
    reset();
    if (userChoice == computerChoice) {
        resultText("It's a draw!");
    } else if ((userChoice == 'Rock' && computerChoice == 'Scissors') ||
    (userChoice == 'Paper' && computerChoice == 'Rock') ||
    (userChoice == 'Scissors' && computerChoice == 'Paper')) {
        resultText("You win!");
    } else {
        resultText('You lose!');
    }
}
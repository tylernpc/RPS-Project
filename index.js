let computerChoice;
let userScore = 0;
let cpuScore = 0;

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
    document.getElementById('userScore').innerHTML = `User Score: ${userScore}`;
    document.getElementById('cpuScore').innerHTML = `Computer Score: ${cpuScore}`;
}

function userInput(userChoice) {
    reset();
    if (userChoice == computerChoice) {
        resultText("It's a draw!");
    } else if ((userChoice == 'Rock' && computerChoice == 'Scissors') ||
    (userChoice == 'Paper' && computerChoice == 'Rock') ||
    (userChoice == 'Scissors' && computerChoice == 'Paper')) {
        userScore++;
        resultText("You win!");
    } else {
        cpuScore++;
        resultText('You lose!');
    }
}

document.getElementsById('userScore').innerHTML = `User Score ${userScore}`;
document.getElementsById('cpuScore').innerHTML = `Computer Score ${cpuScore}`;
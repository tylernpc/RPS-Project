for (let i = 0; i <= 3; i++) {
    
}

function getComputerChoice() {
    computerChoices = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomChoice];
}
const computerChoice = getComputerChoice();

function resultText(result) {
    document.getElementById('result').innerHTML = result;
}

function userInput(userChoice) {
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

// if you care to see the computers answer, you can check the log!
console.log(computerChoice);
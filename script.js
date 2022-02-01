const choices = ['rock','paper','scissors'];

function computerPlay() {
    const randIndex = Math.floor(Math.random() * choices.length);
    const choice = choices[randIndex];
    return choice;
}

function playRound(playerSelection, computerSelection) {

    const playerChoice = playerSelection.toLowerCase();
    const cpuChoice = computerSelection.toLowerCase();

    let loseFlag = false; 
    let winFlag = false;
    let tieFlag = false;

    switch (playerChoice) {

        case cpuChoice: 
            tieFlag = true;      
            break;
        case 'scissors':
            if (cpuChoice === 'rock') {
                loseFlag = true;
            } else {
                winFlag = true;
            }
            break;
        case 'rock':
            if (cpuChoice === 'paper') {
                loseFlag = true;
            } else {
                winFlag = true;
            }
            break;
        case 'paper':
            if (cpuChoice === 'scissors') {
                loseFlag = true;
            } else {
                winFlag = true;
            }
            break;
    }

    if (tieFlag) {
        return 'You tie!';
    } else if (winFlag) {
        return `You win! Your ${playerChoice} beats the opponent's ${cpuChoice}!`
    } else {
        return `You lose! The opponent's ${cpuChoice} beats your ${playerChoice}!`
    }


}

const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
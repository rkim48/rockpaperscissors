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
        alert('You tie!');
        return 'tie';
    } else if (winFlag) {
        alert(`You win! Your ${playerChoice} beats the opponent's ${cpuChoice}!`);
        return 'win';
    } else {
        alert(`You lose! The opponent's ${cpuChoice} beats your ${playerChoice}!`);
        return 'lose';
    }
}


function game() {
    let results = [];
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = prompt('Pick rock/paper/scissors: ');
        let result = playRound(playerSelection, computerSelection);
        // if a tie occurs, keep playing until a win or loss
        while (result === 'tie') {
            computerSelection = computerPlay();
            playerSelection = prompt('Pick rock/paper/scissors: ');
            result = playRound(playerSelection, computerSelection);
        }
        results.push(result);
    }
    
    let nWins = 0;
    let nLosses = 0;
    results.forEach(elem => {
        elem == 'win' ? nWins++ : nLosses++;
    })

    if (nWins > nLosses) {
        alert(`You won ${nWins} out of 5 games! You win!`)
    } else {
        alert(`You won ${nWins} out of 5 games! You lose!`)
    }


}


const playerSelection = 'rock';

console.log(game(playerSelection));


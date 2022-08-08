let playerScore = 0;
let computerScore = 0;
let random;
let computerPick;

//randomize computer pick
function randomize () {
const choices = ['rock', 'paper', 'scissors'];
random = [Math.round(Math.random() * 2)];
computerPick = choices[random];
}

//get the value for player pick
let playerPick;
let result;
const playerImage = document.querySelector('#player-pick');
const computerImage = document.querySelector('#computer-pick');
const selection = document.querySelector('#selection');

//set conditions
const conditions = [
    {'rock': 'Draw', 'paper': 'You win', 'scissors': 'You lose'},
    {'rock': 'You lose', 'paper': 'Draw', 'scissors': 'You win'},
    {'rock': 'You win', 'paper': 'You lose', 'scissors': 'Draw'},
]

//determine the winner
function winner () {
        let result = conditions[random][`${playerPick}`];
        addScore(result);
}

function pickWinner (e) {
    playerPick = e.target.className;
    randomize();
    winner();
}

selection.addEventListener('click', pickWinner);

//end round
function addScore (result) {
    if (result === 'You win') {
        playerScore += 1;
        document.querySelector('#player-score').textContent = `Player Score: ${playerScore}`;
        document.querySelector('#result').textContent = `Computer picks ${computerPick}. You win this round!`
    }
    else if (result === 'You lose') {
        computerScore += 1;
        document.querySelector('#computer-score').textContent = `Computer Score: ${computerScore}`;
        document.querySelector('#result').textContent = `Computer picks ${computerPick}. Computer wins this round!`;
    }

    else if (result === 'Draw') {
        document.querySelector('#result').textContent = `Computer picks ${computerPick}. Draw.`;
    }

    //Declare winner after five wins
    if (playerScore === 5) {
        document.querySelector('#result').textContent = `You won five times (${playerScore} - ${computerScore}). You win the game!`;
        playerScore = 0;
        computerScore = 0;
        document.querySelector('#player-score').textContent = `Player Score: `;
        document.querySelector('#computer-score').textContent = `Computer Score: `;
    }
    else if (computerScore === 5) {
        document.querySelector('#result').textContent = `The computer won five times (${computerScore} - ${playerScore}). The computer wins the game!`;
        playerScore = 0;
        computerScore = 0;
        document.querySelector('#player-score').textContent = `Player Score: `;
        document.querySelector('#computer-score').textContent = `Computer Score: `;
    }
    
}
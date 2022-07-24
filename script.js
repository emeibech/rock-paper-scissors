//functions
function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
//display image on hover
  const rockPick = document.querySelector('.selection .rock');
  const paperPick = document.querySelector('.selection .paper');
  const scissorsPick = document.querySelector('.selection .scissors');
  const showImage = document.querySelector('.player-pick');
  const rockImage = document.createElement('img');
  const paperImage = document.createElement('img');
  const scissorsImage = document.createElement('img');
  
  function displayImageRock() {
  rockImage.setAttribute('src', './img/player-rock.png');
  rockImage.setAttribute('height', '325px')
  rockImage.setAttribute('width', '433px')
  };
  
  function removeImageRock() {
  rockImage.setAttribute('src', '');
  rockImage.setAttribute('height', '');
  rockImage.setAttribute('width', '');
  };
  
  function displayImagePaper() {
  paperImage.setAttribute('src', './img/player-paper.png');
  paperImage.setAttribute('height', '325px')
  paperImage.setAttribute('width', '433px')
  };
  
  function removeImagePaper() {
  paperImage.setAttribute('src', '');
  paperImage.setAttribute('height', '');
  paperImage.setAttribute('width', '');
  };
  
  function displayImageScissors() {
  scissorsImage.setAttribute('src', './img/player-scissors.png');
  scissorsImage.setAttribute('height', '325px')
  scissorsImage.setAttribute('width', '433px')
  };
  
  function removeImageScissors() {
  scissorsImage.setAttribute('src', '');
  scissorsImage.setAttribute('height', '');
  scissorsImage.setAttribute('width', '');
  };
  
  rockPick.addEventListener('mouseover', displayImageRock);
  rockPick.addEventListener('mouseout', removeImageRock);
  showImage.appendChild(rockImage);
  paperPick.addEventListener('mouseover', displayImagePaper);
  paperPick.addEventListener('mouseout', removeImagePaper);
  showImage.appendChild(paperImage);
  scissorsPick.addEventListener('mouseover', displayImageScissors);
  scissorsPick.addEventListener('mouseout', removeImageScissors);
  showImage.appendChild(scissorsImage);

//call random function for computer-pick
const computerTurn = document.querySelectorAll('.selection > button');
computerTurn.addEventListener('click', );

//create new function to randomize computer pick
let computerPick = random(0,2);
console.log(computerPick);


// greet player & show score history
let scoreHistory = 'No score history yet.'
let playerScore = 0;
let computerScore = 0;

// prompt for player name and put in a variable
let playerName = prompt('What is your Name?', '');

for (i = 0; i < 999;) {

for (playOrReset = 'reset'; playOrReset === 'reset';) {
let greeting = `Greetings, ${playerName}. Here is the Score History: ${scoreHistory}`;
alert(greeting);

// ask player if they want to play or reset score history
playOrReset = prompt('Type "play" to start a new game or "reset" to reset score history.', '');
playOrReset = playOrReset.toLowerCase();

// {if player types 'reset', reset score history
    if (playOrReset === 'reset') {
     scoreHistory = 'History has been reset.';
     alert('Score History has been reset');
    }

    // if player types 'play', start the game
    else if (playOrReset === 'play') {
     break
    }

    // else show error and ask again}
    else {
        alert('error');
        playOrReset = 'reset';
    }

}

// start the game | best of 5
alert('Best of 5');
for (playerWins = '0', computerWins = '0'; playerWins <= '2' && computerWins <= '2';) {
    //determine round
    switch (playerWins + '|' + computerWins) {
        case '1|0':
            alert(`${playerName}: 1 | Computer: 0`);
            break;
        case '0|1':
            alert(`${playerName}: 0 | Computer: 1`);
            break;
        case '2|0':
            alert(`${playerName}: 2 | Computer: 0`);
            break;
        case '0|2':
            alert(`${playerName}: 0 | Computer: 2`);
            break;
        case '1|1':
            alert(`${playerName}: 1 | Computer: 1`);
            break;
        case '2|1':
            alert(`${playerName}: 2 | Computer: 1`);
            break;
        case '1|2':
            alert(`${playerName}: 1 | Computer: 2`);
            break;
        case '2|2':
            alert(`${playerName}: 2 | Computer: 2`);
            break;
    }

// get input from player (rock, paper, scissors)
for (playerPick = 'error'; playerPick === 'error';) {
    playerPick = prompt('Pick rock, paper, or scissors and type it in the window prompt','');
    playerPick = playerPick.toLowerCase();

    if (playerPick === 'rock' || playerPick === 'paper' || playerPick === 'scissors') {
        break;
    }

    // {if input is neither (rock, paper, scissor) show error and ask for input again
    else {
        alert('error');
        playerPick = 'error';
    }
    
}

// randomize input (rock, paper, scissors) for computer and put it in another variable
let computerPick = random(0, 2);
computerPick = computerPick.toFixed();

switch (computerPick) {
    case '0':
        alert('Computer picks rock');
        computerPick = 'rock';
        break;
    case '1':
        alert('Computer picks paper');
        computerPick = 'paper';
        break;
    case '2':
        alert('Computer picks scissors');
        computerPick = 'scissors';
        break;
}
// determine the winner for this round
if (playerPick === 'rock') {
    switch (computerPick) {
        case 'rock':
            alert('Draw');
            break;
        case 'paper':
            alert('You lose');
            computerWins = Number(computerWins) + 1;
            break;
        case 'scissors':
            alert('You win')
            playerWins = Number(playerWins) + 1;
            break;
    }
}

else if (playerPick === 'paper') {
    switch (computerPick) {
        case 'rock':
            alert('You win');
            playerWins = Number(playerWins) + 1;
            break;
        case 'paper':
            alert('Draw');
            break;
        case 'scissors':
            alert('You lose');
            computerWins = Number(computerWins) + 1;
            break;
    }
}

else if (playerPick === 'scissors') {
    switch (computerPick) {
        case 'rock':
            alert('You lose');
            computerWins = Number(computerWins) + 1;
            break;
        case 'paper':
            alert('You win');
            playerWins = Number(playerWins) + 1;
            break;
        case 'scissors':
            alert ('Draw');
            break;
    }
}
}

// {if player score reaches 3 points, declare player the winner and update score history
if (playerWins === 3) {
    alert(`${playerName} wins the game`);
    playerScore = playerScore + 1;
}

else if (computerWins === 3) {
    alert('Computer wins the game');
    computerScore = computerScore + 1;
}

scoreHistory = `${playerName}: ${playerScore} | Computer: ${computerScore}`;
}


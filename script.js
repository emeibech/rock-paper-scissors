// greet player & show score history
let scoreHistory = 'No score history yet.'
let playOrReset;
for (playOrReset = 'reset'; playOrReset === 'reset';) {
let greeting = `Greetings, player. Here is the Score History: ${scoreHistory}`;
alert(greeting);

// ask player if they want to play or reset score history
playOrReset = prompt('Type "play" to start a new game or "reset" to reset score history.', '');

// {if player types 'reset', reset score history
    if (playOrReset === 'reset') {
     scoreHistory = 'History has been reset.';
     alert('Score History has been reset');
    }
    // if player types 'play', start the game
    else if (playOrReset === 'play') {
     gameStart();
    }
    // else show error and ask again}
    else {
        alert('error');
        playOrReset = 'reset';
    }

}

// start the game | best of 5 | round 1 of 5
function gameStart () {
    alert('Best of 5');
    alert('Round 1 of 5');
    // prompt for player name and put in a variable
    let playerName = prompt('What is your Name?', '');
}

// get input from player (rock, paper, scissor)
// {if input is neither (rock, paper, scissor) show error and ask for input again
// else put input in a variable}
// randomize input (rock, paper, scissor) for computer and put it in another variable
// call function that determines the winner
// [function condition: rock beats scissor, beaten by paper
// paper beats rock, beaten by scissor
// scissor beats paper, beaten by rock]
// {if player wins, add 1 point to player score
// else add 1 point to computer score}
// {if player score reaches 3 points, declare player the winner and add 1 point to player score history
// if computer wins reaches 3 points, declare computer the winner and add 1 point to computer score history}
// ask player if they want to play another game
// {if yes, start the game, else go back to greet player & show score history}

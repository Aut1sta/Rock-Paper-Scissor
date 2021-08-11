//Game

let playerScore = 0;
let computerScore = 0;
let roundWinner = ''

let computerSelection = computerPlay();
let playerSelection = '';

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        roundWinner = 'draw';
        updateScore()
    }
    if ((playerSelection === 'ROCK' && computerSelection === 'SCISSOR')|| 
       (playerSelection === 'PAPER' && computerSelection === 'ROCK')||
       (playerSelection === 'SCISSOR' && computerSelection === 'PAPER'))
    {
        playerScore++;
        roundWinner = 'player';
        updateScore()
    }
    if ((playerSelection === 'ROCK' && computerSelection === 'PAPER')|| 
       (playerSelection === 'PAPER' && computerSelection === 'SCISSOR')||
       (playerSelection === 'SCISSOR' && computerSelection === 'ROCK'))
    {
        computerScore++;
        roundWinner = 'computer';
        updateScore()
    }
}

function computerPlay(){
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'ROCK'
      case 1:
        return 'PAPER'
      case 2:
        return 'SCISSOR'
    }
}

function isGameOver(playerScore, computerScore){
    if (playerScore === 5){
        scorePara.innerHTML = 'Player Win the Game'
        restartGame()
    }else if(computerScore === 5){
        scorePara.innerHTML = 'Computer Win the Game'
        restartGame()
    } 
}

function updateChoice(){
    computerSelection = computerPlay();
}

function restartGame(){
    playerScore = '';
    playerScore = 0;
    computerScore = 0;

    playerScorePara.innerHTML = `PlayerScore: ${playerScore}`;
    computerScorePara.innerHTML = `ComputerScore: ${computerScore}`
}

//UI

const playerScorePara = document.getElementById("playerScore");
const computerScorePara = document.getElementById("computerScore");
const scorePara = document.getElementById("scoreResults")
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorBtn = document.getElementById("scissorBtn")

function updateScore(){
    switch(roundWinner){
        case 'draw':
            scorePara.innerHTML = `Draw! \n player: ${playerSelection} \n computer: ${computerSelection}`;
            break;
        case 'player':
            scorePara.innerHTML = `Player Win! \n player: ${playerSelection} \n computer: ${computerSelection}`;
            break;
        case 'computer':
            scorePara.innerHTML = `Computer Win! \n player: ${playerSelection} \n computer: ${computerSelection}`;
            break;
    }

    playerScorePara.innerHTML = `PlayerScore: ${playerScore}`;
    computerScorePara.innerHTML = `ComputerScore: ${computerScore}`
    updateChoice()
    isGameOver(playerScore, computerScore)
}




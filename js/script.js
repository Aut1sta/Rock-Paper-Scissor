//Game

let playerScore = 0;
let computerScore = 0;
let roundWinner = ''

let computerSelection = computerPlay();

function computerPlay(){
    let randomNumber = parseInt(Math.random() + 2);
    switch(randomNumber){
        case 0:
            return 'ROCK'
            break;
        case 1: 
            return 'PAPER'
            break;
        case 2:
            return 'SCISSOR'
            break;
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        roundWinner = 'Draw!';
    }
    if((playerSelection == 'ROCK' && computerSelection == 'SCISSOR')|| 
       (playerSelection == 'PAPER' && computerSelection == 'ROCK' )||
       (playerSelection == 'SCISSOR' && computerSlection == 'PAPER')){
           playerScore++
           roundWinner = 'Player'
    }
    if((playerSelection == 'ROCK' && computerSelection == 'PAPER')|| 
       (playerSelection == 'PAPER' && computerSelection == 'SCISSOR' )||
       (playerSelection == 'SCISSOR' && computerSlection == 'ROCK')){
        computerScore++
        roundWinner = 'Computer'
 }
}







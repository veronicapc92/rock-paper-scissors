let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById('userScore');
const computerScoreSpan = document.getElementById('computerScore');
const scoreBoard = document.getElementById('scoreBoard');
const result = document.getElementById('gameResult');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function changeColors(result, userChoice, computerChoice) {
    const userChoiceDiv = document.getElementById(`${userChoice.toLowerCase()}`);
    const computerChoiceDiv = document.getElementById(`${computerChoice.toLowerCase()}`);
    if (result === 'win') {
        userChoiceDiv.classList.add('win');
        computerChoiceDiv.classList.add('lose');
    } else if (result === 'lose') {
        userChoiceDiv.classList.add('lose');
        computerChoiceDiv.classList.add('win');
    } else if (result === 'draw') {
        userChoiceDiv.classList.add('draw');
        computerChoiceDiv.classList.add('draw');
    }
    setTimeout(function() {
        userChoiceDiv.classList.remove('win', 'lose', 'draw');
        computerChoiceDiv.classList.remove('win', 'lose', 'draw');
    }, 700)
}

function win(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    result.innerHTML = `${userChoice} covers ${computerChoice}. You win!`;
    changeColors('win', userChoice, computerChoice);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    result.innerHTML = `${computerChoice} covers ${userChoice}. You lose...`;
    changeColors('lose', userChoice, computerChoice);
}

function draw(userChoice, computerChoice) {
    result.innerHTML = "It's a draw!";
    changeColors('draw', userChoice, computerChoice);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            win(userChoice, computerChoice);
            break;
        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            lose(userChoice, computerChoice);
            break;
        case 'PaperPaper':
        case 'RockRock':
        case 'ScissorsScissors':
            draw(userChoice, computerChoice);
    }
}


function main() {

    rock.addEventListener('click', () => {
        game('Rock');
    })
    
    paper.addEventListener('click', () => {
        game('Paper');
    })
    
    scissors.addEventListener('click', () => {
        game('Scissors');
    })    

}

main();


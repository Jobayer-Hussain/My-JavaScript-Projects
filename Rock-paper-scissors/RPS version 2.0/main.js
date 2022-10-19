const Computer = document.querySelector('#computer');
const User = document.querySelector('#user');
const Result = document.querySelector('#result');
const PossibleChoices = document.querySelectorAll('button');
const Container = document.querySelector('#container');
const ScorePanel = document.querySelector('#scorePanel');

let userChoice;
let computerChoice;
let result;

PossibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    userChoice = e.target.id
    User.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if(randomNumber == 1){
        computerChoice = 'Rock'
    }if(randomNumber == 2){
        computerChoice = 'Paper'
    }if(randomNumber == 3){
        computerChoice = 'Scissor'
    };

    Computer.innerText = computerChoice;
}

function getResult(){

    let win = "You've won!"
    let lose = "You've lost!"
    let draw = "it's a draw!"

    if(userChoice == computerChoice){
        result = draw
        Container.style.border='10px solid orange'
        ScorePanel.style.background='orange'
    }if(userChoice === 'Rock' && computerChoice === 'Scissor'){
        result = win
        Container.style.border = "10px solid green"
        ScorePanel.style.background='green'
    }if(userChoice === 'Paper' && computerChoice === 'Rock'){
        result = win
        Container.style.border = "10px solid green"
        ScorePanel.style.background='green'
    }if(userChoice === 'Scissor' && computerChoice === 'Paper'){
        result = win
        Container.style.border = "10px solid green"
        ScorePanel.style.background='green' 
    }if(userChoice === 'Paper' && computerChoice === 'Scissor'){
        result = lose
        Container.style.border = "10px solid red"
        ScorePanel.style.background='red'
    }if(userChoice === 'Rock' && computerChoice === 'Paper'){
        result = lose
        Container.style.border = "10px solid red"
        ScorePanel.style.background='red'
    }if(userChoice === 'Scissor' && computerChoice === 'Rock'){
        result = lose
        Container.style.border = "10px solid red"
        ScorePanel.style.background='red'
    }
    Result.innerText = result;
}






      
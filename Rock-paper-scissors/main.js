const Computer = document.getElementById('computer-choice');
const User = document.getElementById('user-choice');
const Result = document.getElementById('result');
const PossibleChoices = document.querySelectorAll('button');

let UserChoice
let computerChoice
let result

PossibleChoices.forEach(PossibleChoices => PossibleChoices.addEventListener('click', (e) => {
        UserChoice = e.target.id
        User.innerText = UserChoice;
        generateComputerChoice();
        getResult();
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber === 1){
        computerChoice = 'Rock'
    }if(randomNumber === 2){
        computerChoice= 'Paper'
    }if(randomNumber === 3){
        computerChoice = 'Scissor'
    };

    Computer.innerText = computerChoice;
}

function getResult(){

    let Win = 'You Won!'
    let Lose = 'You Lost!'

    if(computerChoice === UserChoice){
        result = "it's a Draw!"
    }
    if(computerChoice === 'Rock' && UserChoice === 'Paper'){
        result = Win
    }
    if(computerChoice === 'Paper' && UserChoice === 'Rock'){
        result = Lose
    }
    if(computerChoice === 'Scissor' && UserChoice === 'Rock'){
        result = Win
    }
    if(computerChoice === 'Scissor' && UserChoice === 'Paper'){
        result = Lose
    }
    if(computerChoice === 'Rock' && UserChoice === 'Scissor'){
        result = Lose
    }
    if(computerChoice === 'Paper' && UserChoice === 'Scissor'){
        result = Win
    }
    Result.innerText = result
}


    



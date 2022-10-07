const Squares = document.querySelectorAll('.square');
const Mole = document.querySelector('.mole');
const Score = document.querySelector('#score');
const leftTime = document.querySelector('#time');
const sound = new Audio('Lol.mp3');

let result = 0;
let hitPosition;
var currentTime = 15;
let timerId = null;

    function randomSquare(){
        Squares.forEach(square => {
            square.classList.remove('mole')
        })
    
        let randomSquare = Squares[Math.floor(Math.random() * 9)]
        randomSquare.classList.add('mole')
    
        hitPosition = randomSquare.id
    }
    
    Squares.forEach(square => {
        square.addEventListener('mousedown', () =>{
            if(square.id == hitPosition){
                result++
                Score.textContent = result
                hitPosition = null
                square.classList.add('mole-2')
                timer = setTimeout(() => {
                    square.classList.remove('mole-2')
                }, 400);
                sound.play();
            }
        })
    })
    
    function moveMole(){
        let timerId = null
        timerId = setInterval(randomSquare, 500)
    }
    moveMole();
    
    function countDown() {
        currentTime--
        leftTime.textContent = currentTime
        if(currentTime == 0){
            clearInterval(countDownTimerId)
            clearInterval(timerId)
            alert('GAME OVER! Your Final Score is ' + result)
        }
    }
    
let countDownTimerId = setInterval(countDown, 1000);



 



    



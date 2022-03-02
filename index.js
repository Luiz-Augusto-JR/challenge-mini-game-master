random()
const music = new Audio("./src/sounds/music.mp3");
music.play()
const acertos = new Audio("./src/sounds/acerto.wav");
const erros = new Audio("./src/sounds/erro.wav");

const keyDown = (document.getElementById('keyDown'))
const randomKey = document.getElementById('randomKey')




//gerador de letra aleatória
function random(){
    const letters = ['q','w','e','r','t','y','u',
    'i','o','p','a','s','d','f','g','h','j','k','l',
    'z','x','c','v','b','n','m']


    let random = Math.floor(Math.random() * letters.length)
    let randomLetter = letters[random];
    document.getElementById('randomKey').innerHTML = `${randomLetter}`
}//----------




//pegando tecla que foi apertada pelo usuário
window.addEventListener('keydown', function (e) {
    document.querySelector('#keyDown').innerHTML = `${e.key}` 
    
    
  
    let randomKey = document.getElementById('randomKey').innerText


    let point = 0

    point = e.key === randomKey ? 1 : -1 

    if(point === 1){
        const currentValue = +document.getElementById('acertos').innerText
        document.getElementById('acertos').innerHTML = currentValue + 1
        document.getElementById('keyDown').innerHTML = null
        acertos.play(), acertos.currentTime=0
        random()
    } else if (point === -1) {
        const currentValue = +document.getElementById('erros').innerText
        document.getElementById('erros').innerHTML = currentValue + 1
        document.getElementById('keyDown').innerHTML = null
        erros.play(), erros.currentTime=0
    }  
})






//timer
const timer = document.getElementById('timer');

const startingMinutes = 1;
let time = startingMinutes * 60 

let counter = setInterval(updateTimer,1000)

    function updateTimer (){
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds
        seconds === '00' ? reset() : seconds

        timer.innerHTML = `0${minutes}:${seconds}`
        time--

        function reset(){
            if(minutes === 0){
                clearInterval(counter);
                document.location.reload(true);
            }
        }
    }
//------------------





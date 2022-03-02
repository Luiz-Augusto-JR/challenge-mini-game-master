const music = new Audio("./src/sounds/music.mp3");

const keyDown = document.getElementById('keyDown')
const randomKey = document.getElementById('randomKey')


// let result = randomKey.localeCompare(keyDown);
// console.log(result)

//---------
const letters = ['q','w','e','r','t','y','u',
'i','o','p','a','s','d','f','g','h','j','k','l',
'ç','z','x','c','v','b','n','m']
let random = Math.floor(Math.random() * letters.length)
let randomLetter = letters[random];
document.getElementById('randomKey').innerHTML = `${randomLetter}`
//----------




//------------------------
const timer = document.getElementById('timer');
const startingMinutes = 1;
let time = startingMinutes * 60 
let counter = setInterval(updateTimer,1000)

function updateTimer (){
    music.play()
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds
    seconds === '00' ? reset() : seconds
    timer.innerHTML = `${minutes}:${seconds}`
    time--

    function reset(){
        if(minutes === 0){
            clearInterval(counter);
            document.location.reload(true);
        }
    }
}
//------------------


window.addEventListener('keydown', function (e) {
    document.querySelector('#keyDown').innerHTML = `${e.key}` 
})


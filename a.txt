/**
 * Gera o primeiro caracter.
 */
randomString()

/**
 *  Função timer.
 */
function Timer(callback, val) {
  val = val || 60
  var timer = setInterval(function () {
    callback(val)
    if (val-- <= 0) {
      clearInterval(timer)
    }
  }, 1000)
}

/**
 * Cria um objeto Timer e mostra na tela.
 */
new Timer(function (val) {
  
  var timerMsg = val > 0 ? '00:' + (val >= 10 ? val : '0' + val) : 'GAME OVER'
  
  document.getElementById('timer').textContent = timerMsg

  timerMsg !== 'GAME OVER' 
    ? randomString() 
    : document.getElementById('character').textContent = 'GAME OVER'
  
})

/**
 * Geração aleatória de caracter.
 */
function randomString() {
  
  var strings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  var randomIndex = Math.floor(Math.random() * strings.length)

  document.getElementById('character').textContent = strings[randomIndex]
}

/**
 * Captura evento keydown.
 */
document.querySelector('body').addEventListener('keydown', function (event) {
  
  var keySelected = event.keyCode

  const keyGenerate = $('#character').text()

  point = (valueKey(keySelected) == keyGenerate) ? 1 : -1 

  if ($('#timer').text() !== 'GAME OVER' ) {

    updateScore(point)
  
    if (point == 1){
      randomString();
    } 
      
  }
  
})

var score = score || 0
var errors = errors || 0

/**
 * Atualização do score e erros.
 */
function updateScore(newValue) {
  
  newValue == 1 ? score++ : errors++

  $('#score').text(score)
  $('#errors').text(errors)
  
}

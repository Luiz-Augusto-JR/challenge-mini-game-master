    random()
    const music = new Audio("./src/sounds/music.mp3");
    const acertos = new Audio("./src/sounds/acerto.wav");
    const erros = new Audio("./src/sounds/erro.wav");


    //gerador de letra aleatória
    function random(){
        const letters = ['q','w','e','r','t','y','u',
        'i','o','p','a','s','d','f','g','h','j','k','l',
        'z','x','c','v','b','n','m']

        let random = Math.floor(Math.random() * letters.length)
        let randomLetter = letters[random];
        document.getElementById('randomKey').innerHTML = `${randomLetter}`
    }

    //pegando a tecla que foi apertada pelo usuário
    window.addEventListener('keydown', function (e) {
        music.play()
        document.getElementById('keyDown').innerHTML = `${e.key}` 

        let randomKey = document.getElementById('randomKey').innerText
        let point = 0
        
        point = e.key === randomKey ? 1 : -1 
        if(point === 1){
            //transformando em valor numero pra poder somar, antes era uma string
            const currentValue = +document.getElementById('acertos').innerText
            
            document.getElementById('acertos').innerHTML = currentValue + 1
            
            //pra nao aparecer a letra digitada na tela
            document.getElementById('keyDown').innerHTML = null

            acertos.play(), acertos.currentTime=0
        
            //random pra chamar dnv depois que acertar a letra
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

    // definindo as variaveis de tempo
    const startingMinutes = 1;
    let time = startingMinutes * 60 

    // intervalo q executa a função updateTimer
    let counter = setInterval(updateTimer,1000)

    function updateTimer (){
        // const minutes = stargingminutes
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds
        seconds === '00' ? reset() : seconds

        timer.innerHTML = `0${minutes}:${seconds}`
        time--

        function reset(){
            if(minutes === 0){
                clearInterval(counter);
                
            }
        }
    }



    
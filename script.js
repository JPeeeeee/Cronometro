function buttons(){
    const button1 = document.querySelector('main div.buttons button.iniciar')
    const reflexo1 = document.querySelector('button div.reflexo-i')
    
    button1.addEventListener("mouseover", () => {
    
        reflexo1.style.width = '100%'
        reflexo1.style.marginRight = '0%'
    })
    
    button1.addEventListener("mouseout", () => {
    
        reflexo1.style.width = '10%'
        reflexo1.style.marginRight = '90%'
    })
    
    const button2 = document.querySelector('main div.buttons button.pausar')
    const reflexo2 = document.querySelector('button div.reflexo-p')
     
    button2.addEventListener("mouseover", () => {
    
        reflexo2.style.width = '100%'
        reflexo2.style.marginRight = '0%'
    })
    
    button2.addEventListener("mouseout", () => {
    
        reflexo2.style.width = '10%'
        reflexo2.style.marginRight = '90%'
    })
    
    const button3 = document.querySelector('main div.buttons button.parar')
    const reflexo3 = document.querySelector('button div.reflexo-pa')
    
    button3.addEventListener("mouseover", () => {
    
        reflexo3.style.width = '100%'
        reflexo3.style.marginRight = '0%'
    })
    
    button3.addEventListener("mouseout", () => {
    
        reflexo3.style.width = '10%'
        reflexo3.style.marginRight = '90%'
    })   
}

function reset_alert(){
    document.querySelector('main div.buttons button.iniciar P').innerHTML = 'RETOMAR'
    clearInterval(start)
    rodando = true

    let alert = document.querySelector('main div.reset-alert').classList

    if (alert == 'reset-alert on'){
        alert.remove('on')
        alert.add('off')
    } else{
        alert.remove('off')
        alert.add('on')
    }
}

const min = document.querySelector('p#min')
const sec = document.querySelector('p#sec')
const ms = document.querySelector('p#ms')

let rodando = true
let minutes = 00
let seconds = 00
let miliseconds = 00


function iniciar(){
    document.querySelector('main div.buttons button.iniciar p').innerHTML = 'INICIAR'

    if (rodando == true){
        start = setInterval(function(){
            miliseconds++
            ms.innerHTML = miliseconds
            if (miliseconds == 100){
                miliseconds = -1
                miliseconds ++
                ms.innerHTML = miliseconds
                
                
                seconds++
                sec.innerHTML = seconds
                if (seconds == 60){
                    seconds = -1
                    seconds++
                    sec.innerHTML = seconds
    
    
    
                    minutes++
                    min.innerHTML = minutes
                    if (minutes < 10){
                        min.innerHTML = '0' + minutes
                    }
                }
                if (seconds < 10){
                    sec.innerHTML = '0' + seconds
                }
            }
            if (miliseconds < 10){
                ms.innerHTML = '0' + miliseconds
            }
        }, 10)
    }
    rodando = false
}

function pausar(){
    document.querySelector('main div.buttons button.iniciar p').innerHTML = 'RETOMAR'

    rodando = true

    clearInterval(start)
}

function reset(){
    document.querySelector('main div.buttons button.iniciar P').innerHTML = 'INICIAR'
    minutes = 00
    seconds = 00
    miliseconds = 00

    ms.innerHTML = '0' + miliseconds
    sec.innerHTML = '0' + seconds
    min.innerHTML = '0' + minutes

    let alert = document.querySelector('main div.reset-alert').classList

    alert.remove('on')
    alert.add('off')
}
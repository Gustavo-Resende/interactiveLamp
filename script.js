//script
let ligar = document.getElementById('on')
let desligar = document.getElementById('off')
let lampOff = document.getElementById('img-off')
let lampOn = document.getElementById('img-on')
let lampBrake = document.getElementById('img-brake')

function interruptor() {
    
    let online = ligar.onclick = function on(){
        lampOn.removeAttribute('hidden'),
        lampOff.setAttribute('hidden', '')
        lampBrake.setAttribute('hidden', '')
        lampOn.onclick = function (){
            lampOn.setAttribute('hidden', '')
            lampBrake.removeAttribute('hidden')
        }
    }

    let offline = desligar.onclick = function off(){
        lampOff.removeAttribute('hidden'),
        lampOn.setAttribute('hidden', '')
        lampBrake.setAttribute('hidden', '')
        lampOff.onclick = function brake(){
            lampOff.setAttribute('hidden', '')
            lampBrake.removeAttribute('hidden')
        }
    }
    
    let enter = lampOff.onmouseenter = function onMouse(){
        lampOn.removeAttribute('hidden')
        lampOff.setAttribute('hidden', '')
    }

    let out = lampOn.onmouseout = function offMouse(){
        lampOn.setAttribute('hidden', '')
        lampOff.removeAttribute('hidden')
    }
}

interruptor()
let ligar = document.getElementById('on')
let desligar = document.getElementById('off')
let lampOff = document.getElementById('img-off')
let lampOn = document.getElementById('img-on')
let lampBrake = document.getElementById('img-brake')

function interruptor() {
    
    lampOff.onclick = function(){
        lampOff.setAttribute('hidden', '')
        lampBrake.removeAttribute('hidden')
    }

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
        lampOn.setAttribute('hidden', '')
        lampBrake.setAttribute('hidden', '')
        lampOff.removeAttribute('hidden')
        lampOff.onclick = function (){
            lampOn.setAttribute('hidden', '')
            lampBrake.removeAttribute('hidden')
            lampOff.setAttribute('hidden', '')
        }
    }

}

interruptor()
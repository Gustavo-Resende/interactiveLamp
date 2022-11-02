let ligar = document.getElementById('on')
let desligar = document.getElementById('off')
let lampOff = document.getElementById('img-off')
let lampOn = document.getElementById('img-on')
let lampBrake = document.getElementById('img-brake')

function interruptor() {

    ligar.onclick = function on(){
        lampOn.removeAttribute('hidden'),
        lampOff.setAttribute('hidden', '')
        lampBrake.setAttribute('hidden', '')
        lampOn.onclick = function (){
            lampOn.setAttribute('hidden', '')
            lampBrake.removeAttribute('hidden')
        }
    }

    desligar.onclick = function off(){
        lampOff.removeAttribute('hidden'),
        lampOn.setAttribute('hidden', '')
        lampBrake.setAttribute('hidden', '')
    }

    lampOff.onclick = function brake(){
        lampOff.setAttribute('hidden', 'hidden')
        lampBrake.removeAttribute('hidden')
    }
}

interruptor()
const ligar = document.getElementById('on');
const desligar = document.getElementById('off');
const lamp = document.getElementById('lamp')

function isLampBroken() {
    return lamp.src.indexOf ('brake') > -1
}

function lampOn() {
    if (!isLampBroken () ) {
        lamp.src = 'assets/light.jpg'
    }
}

function lampOff() {
    if (!isLampBroken () ) {
        lamp.src = 'assets/off.jpg'
    }
}

function lampBrake() {
    lamp.src = 'assets/brake.jpg'
}

ligar.addEventListener ('click', lampOn)
desligar.addEventListener ('click', lampOff)
lamp.addEventListener ('mouseover', lampOn)
lamp.addEventListener ('mouseleave', lampOff)
lamp.addEventListener ('dblclick', lampBrake)

let clicksOn = 0;

ligar.onclick = function() {
    clicksOn++;
    if(clicksOn > 3){
        lamp.src = 'assets/brake.jpg'
    }
}

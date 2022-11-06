const ligar = document.getElementById('on');
const desligar = document.getElementById('off');
const trocarLampada = document.getElementById('newLamp');
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
    showButton();
}

// troca lâmpada quando é chamado pela função changeLamp
function lampNew() {
    lamp.src = 'assets/off.jpg';
}

// mostra botão para trocar lampada, quando estiver quebrada
function showButton() {
    trocarLampada.style.display = 'block';
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
        showButton();
    }
}

/**
 * função chamada pela ação onclick do botão TROCAR
 * (1) zera variável clicksOn
 * (2) troca lâmpada
 * (3) esconde botão usado para trocar lâmpada
 */
function changeLamp() {
    clicksOn = 0;
    lampNew();
    trocarLampada.style.display = 'none';
}
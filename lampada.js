const buttonOn = document.getElementById('on');
const buttonOff = document.getElementById('off');
const lamp = document.getElementById('lamp');

function LightOn () {
  lamp.src = 'lamp.acesa.jpg';
}

function lightOff () {
  lamp.src = 'lâmpada-apagada.png';
}


buttonOn.addEventListener('click', LightOn);
buttonOff.addEventListener('click', lightOff);
lamp.addEventListener('mouseover', LightOn);
lamp.addEventListener('mouseleave', lightOff);
let play = document.getElementById('play');
let ESTASESCUCHANDO = document.querySelector('#ESTASESCUCHANDO');
let wave = document.querySelector("#example");


play.onclick = function() {

    audio.play();
    play.classList.toggle('fade');
    setTimeout(() => {
        play.classList.toggle('display')
    }, 600);
    setTimeout(() => {
        ESTASESCUCHANDO.classList.toggle('fade');
        wave.classList.toggle('fade');
    }, 600);
};

var classic = new SiriWave({
    container: wave,
    width: 800,
    height: 150,
    color: '#f8aa28',
    speed: 0.07,
});
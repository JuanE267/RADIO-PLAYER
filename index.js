let play = document.getElementById('play');
let ESTASESCUCHANDO = document.querySelector('#ESTASESCUCHANDO');

document.getElementById('play').onclick = function() {
    play.classList.toggle('fade');
    setTimeout(() => {
        play.classList.toggle('display')
    }, 600);
    setTimeout(() => {
        ESTASESCUCHANDO.classList.toggle('fade');
    }, 600);
}
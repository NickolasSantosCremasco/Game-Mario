const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clounds = document.querySelector('.clounds')
const pontuation = document.querySelector('#point');
let point = 0; // Declarar a variável 'point' fora do loop
let scored = false

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloundsPosition = clounds.offsetLeft
    console.log(cloundsPosition)

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = 'img/game-over.png';
        mario.style.left = '30px';
        mario.style.width = '90px';

        clounds.style.animation = 'none'
        clounds.style.left = `${cloundsPosition}px`

        clounds.classList.add('UpDownClound')

        pontuation.innerHTML = `${point}`;
        clearInterval(loop);
    } 

    if (pipePosition <= 0 && !scored) {
        point++; // Incrementar 'point'
        pontuation.innerHTML = `${point}`; // Atualizar a pontuação no HTML
        scored = true
    }

    if (pipePosition > 0) {
        scored = false
    }
}, 10);

document.addEventListener('keydown', jump);
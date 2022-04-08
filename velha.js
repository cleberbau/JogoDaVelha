let jogador = null;
let jogadorSelecionado = document.getElementById('jogador-selecionado');
let quadrados = document.getElementsByClassName(quadrado);

function escolherQuadrado(id){
    let quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-'){
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if (jogador === 'X'){
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

mudarJogador('X');

function checaVencedor(){
    let quadrado1 = document.getElementById(1);
    let quadrado2 = document.getElementById(2);
    let quadrado3 = document.getElementById(3);
    let quadrado4 = document.getElementById(4);
    let quadrado5 = document.getElementById(5);
    let quadrado6 = document.getElementById(6);
    let quadrado7 = document.getElementById(7);
    let quadrado8 = document.getElementById(8);
    let quadrado9 = document.getElementById(9);
}

let jogador, vencedor = null;
let jogadorSelecionado = document.getElementById('jogador-selecionado');
let vencedorSelecionado = document.getElementById('vencedorSelecionado');
let quadrados = document.getElementsByClassName('quadrado');

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
    checaVencedor();
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

    if(checaSequencia(quadrado1,quadrado2,quadrado3)){
        mudaCorQuadrado(quadrado1,quadrado2,quadrado3);
        mudarVencedor(quadrado1);
        return;

    }

    if(checaSequencia(quadrado4,quadrado5,quadrado6)){
        mudaCorQuadrado(quadrado4,quadrado5,quadrado6);
        mudarVencedor(quadrado4);
        return;

    }
    if(checaSequencia(quadrado7,quadrado8,quadrado9)){
        mudaCorQuadrado(quadrado7,quadrado8,quadrado9);
        mudarVencedor(quadrado4);
        return;

    }
    if(checaSequencia(quadrado1,quadrado4,quadrado7)){
        mudaCorQuadrado(quadrado1,quadrado4,quadrado7);
        mudarVencedor(quadrado4);
        return;

    }

    if(checaSequencia(quadrado1,quadrado4,quadrado7)){
        mudaCorQuadrado(quadrado1,quadrado4,quadrado7);
        mudarVencedor(quadrado4);

    }
}
function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;

}

function mudaCorQuadrado(quadrado1,quadrado2,quadrado3){
    quadrado1.style.background = '#06f400';
    quadrado2.style.background = '#06f400';
    quadrado3.style.background = '#06f400';

}

function checaSequencia(quadrado1,quadrado2,quadrado3){
    var eigual = false;
    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        eigual = true;
    }
    return eigual;
}

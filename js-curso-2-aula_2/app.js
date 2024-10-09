let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    
    if (chute == numeroSecreto)
        exibirTextoNaTela("h1", "Acertou!")
    else if (chute < numeroSecreto){
        exibirTextoNaTela("h1", "O numero é maior")
        chute = document.querySelector('input');
        chute.value = '';
    }
    else{
        exibirTextoNaTela("h1", "O numero é menor")
        chute = document.querySelector('input');
        chute.value = '';
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}









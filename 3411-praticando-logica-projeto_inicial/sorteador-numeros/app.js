function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    //Fazer o Alert funcionar
    let numero = obterNumeroAleatorio(de,ate);
    if (quantidade > 0){
        for ( let i = 0; i < quantidade; i++){
            let numero = obterNumeroAleatorio(de, ate);
            alert(numero);
        }
    }else{
        alert("Porfavor insira uma quantidade valida")
    }
}
//Calculo que pega o número aleatorio
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//Colocar números sorteados
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">${numero}</label>`
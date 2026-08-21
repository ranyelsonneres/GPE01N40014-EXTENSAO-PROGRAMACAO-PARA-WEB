//pegar o elemento HTML e guardar em uma variável
let meuElemento = document.getElementById("paragrafo");
console.log(meuElemento);
console.log(meuElemento.textContent); //acessar o conteúdo

//buscar o elemento pela classe
let exemplos = document.getElementsByClassName("conjunto");
console.log(exemplos);

//imprimir os elementos relacionados a classe
for (let i=0; i<exemplos.length;i++){
    console.log(exemplos[i].textContent);
}

//bsucar o elemento pela TAG
let tagHTML = document.getElementsByTagName("p");
console.log(tagHTML);

//criar o elemento HTML vai javascript
let mensagem = window.prompt("Insira uma mensagem");
let destino = document.getElementById("elemento"); //buscando o elemento HTML
let elementoHTML = document.createElement("p"); //cria a tag HTML
elementoHTML.textContent = mensagem;
destino.append(elementoHTML); //adiciono ao DOM

//algoritmo
function somar(){
    let n1 = parseFloat(document.getElementById("num1").value);
    console.log(n1);
    console.log(typeof n1);
    let n2 = parseFloat(document.getElementById("num2").value);
    let soma = n1 + n2;
    let resultadoTela = `Resultado: ${soma}`;
    document.getElementById("resultado").innerHTML = resultadoTela;
}

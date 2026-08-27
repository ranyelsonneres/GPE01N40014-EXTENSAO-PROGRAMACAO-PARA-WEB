//trazer o elemento
let botao1 = document.getElementById("botao1");

//eventos - manipulador
botao1.onclick = function(){
    //lógica de negócio
    alert("Primeiro evento");
};

let botao2 = document.getElementById("botao2");
botao2.onmouseover = function(){
    botao2.style.backgroundColor = "red";
};

botao2.onmouseout = function(){
   //lógica
    botao2.style.backgroundColor = "";
};

botao2.ondblclick = function(){
    botao2.textContent = "Duplo clique";
};

//eventos do teclado
let campoEntrada = document.getElementById("campoEntrada");
let resultado = document.getElementById("resultado");
campoEntrada.onkeydown = function(event){
    if(event.key == "Enter"){
        console.log("pressionou uma tecla");
        resultado.innerHTML = campoEntrada.value;
        campoEntrada.value = "";
    };
};

//utilizar o addEventListener
let caixa = document.getElementById("caixa");
let area = document.getElementById("area");

//permitir arrastar o elemento
caixa.addEventListener("dragstart", ()=>{
    console.log("arrastando o objeto");
});

//soltar o elemento
area.addEventListener("dragover", (e) =>{
    e.preventDefault();
});

area.addEventListener("drop", ()=>{
    area.appendChild(caixa);
})

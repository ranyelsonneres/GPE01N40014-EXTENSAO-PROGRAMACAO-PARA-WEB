//criar os preços dos combustíveis
const precoGasolina = 6.69;
const precoEtanol = 5.80;
const precoDiesel = 6.30;

//criar a função para identificar o tipo de combustível
function atualizarValor(){
    let tipo = document.getElementById("combustivel").value;
    console.log(tipo);
    let litros = document.getElementById("litros").value;
    console.log(litros);
    let precoPorLitro; //pegar os preços acima
    switch (tipo) {
        case "gasolina":
            precoPorLitro = precoGasolina;
            break;
        case "etanol":
            //repetir a lógica
            precoPorLitro = precoEtanol;
            break;
        case "diesel":
            precoPorLitro = precoDiesel;
            break;
        default:
            console.log("escolha uma opção");
            return;
    }
    console.log(precoPorLitro);
    //chamar a função para calcular
    calcularValorAbastecimento(precoPorLitro, litros);
}

//chamar a função
let tipoCombustivel = document.getElementById("combustivel");
tipoCombustivel.addEventListener("change", atualizarValor);

//calcular o abastecimento
function calcularValorAbastecimento(precoCombustivel, litros){
    if(litros<=0){
         document.getElementById("resultado").innerHTML = "Insira um valor válido";
    } else {
        let valorTotal = precoCombustivel* litros;
        document.getElementById("resultado").innerHTML = valorTotal;
    }
}

let litros = document.getElementById("litros");
litros.addEventListener("input", atualizarValor);

litros.addEventListener("keydown", function(event){
    if (event.key == "Enter"){
        event.preventDefault();
        atualizarValor;
    }
})


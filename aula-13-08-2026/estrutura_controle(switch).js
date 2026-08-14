//Estrutura de controle (switch)

//o programa solicita ao usuário que escolha uma operação matemática e insira dois números. O switch será usado para calcular o resultado com base na operação escolhida
// Solicita ao usuário para escolher uma operação e inserir dois números
let operacao = prompt("Escolha uma operação: soma, subtracao, multiplicacao, divisao");
let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

// Inicializa a variável de resultado
let resultado;

// Usa o switch para determinar a operação a ser realizada
//toLowerCase() é um método da classe String que converte todos os caracteres de uma string para minúsculas.
switch (operacao.toLowerCase()) {
    case "soma":
        resultado = num1 + num2;
        break;
    case "subtracao":
        resultado = num1 - num2;
        break;
    case "multiplicacao":
        resultado = num1 * num2;
        break;
    case "divisao":
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            resultado = "Não é possível dividir por zero.";
        }
        break;
    default:
        resultado = "Operação inválida. Por favor, escolha soma, subtracao, multiplicacao ou divisao.";
        break;
}

// Exibe o resultado no console
document.write("Resultado: " + resultado);

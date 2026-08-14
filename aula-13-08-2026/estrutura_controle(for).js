//Estrutura de controle (for)

//Exemplo 1:
//Exibir números de 1 a 5 usando o for
document.write("Números de 1 a 5:<br>");

for (let i = 1; i <= 5; i++) {
    document.write(i + "<br>");
}

//Exemplo 2:
//Criar um programa que solicita ao usuário uma quantidade de números e imprimir a quantidade solicitada
//necessário fazer a conversão pois os dados que são recebidos é do tipo string.
let quantidade = parseInt(prompt("Informe uma quantidade de números: "));
for (let i = 1; i<=quantidade; i++){
    //1 - fazer este primeiro
    //document.write(i + "<br>"); //imprime a quantidade de número solicitados pelo usuário.

    //2 - comentar o anterior e fazer este
    //let numero = prompt("Digite o número: " + i); //vai pedir para o usuário digitar os números
    //document.write("Número " + i + ": " + numero + "<br>"); //realizar a impressão dos números
    
}

//Exemplo 3:
//Criar um programa que verifica se a quantidade de números é valido ou maior que zero
// Solicita ao usuário a quantidade de números que deseja inserir
let quantidade = parseInt(prompt("Quantos números você deseja inserir?"));

// Verifica se a quantidade é um número válido e maior que zero
//A função isNaN() verifica se o valor de quantidade não é um número (NaN significa "Not a Number").
//O operador lógico || é o "OU" lógico. Ele retorna true se uma das condições à esquerda ou à direita for verdadeira.
if (isNaN(quantidade) || quantidade <= 0) {
    document.write("Por favor, insira um número válido maior que zero.");
} else {
    // Cria um loop for para solicitar e imprimir os números
    for (let i = 1; i <= quantidade; i++) {
        // Solicita um número ao usuário
        //let numero = prompt("Digite o número " + i + ":");
        
        // Exibe o número inserido
        //document.write("Número " + i + ": " + numero + "<br>");
        document.write(i + "<br>");
    }
}

//Colocar alguns exercícios
//Ex1: Crie um programa que solicita ao usuário um número e, em seguida, imprime a tabuada desse número de 1 a 10.
// Solicita ao usuário um número para a tabuada
let numero = parseInt(prompt("Digite um número para ver sua tabuada:"));

// Exibe a tabuada do número solicitado
document.write("Tabuada do " + numero + ":<br>");
for (let i = 1; i <= 10; i++) {
    document.write(numero + " x " + i + " = " + (numero * i) + "<br>");
}


//Ex2: Crie um programa que solicita ao usuário um número inteiro positivo e calcula a soma de todos os números inteiros de 1 até o número fornecido. Em seguida, exibe o resultado.
// Solicita ao usuário um número inteiro positivo
let limite = parseInt(prompt("Digite um número inteiro positivo:"));

// Inicializa a variável de soma
let soma = 0;

// Calcula a soma dos números de 1 até o limite
for (let i = 1; i <= limite; i++) {
    soma += i; // Adiciona o valor de i à soma
}

// Exibe o resultado da soma
document.write("A soma dos números de 1 até " + limite + " é " + soma + ".");

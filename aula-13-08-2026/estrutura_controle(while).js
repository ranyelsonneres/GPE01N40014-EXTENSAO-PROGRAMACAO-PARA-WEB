//Estrutura de controle (while)

//Exemplo 1: contador de 1 a 5
// Inicializa a variável do contador
let contador = 1;

// Exibe números de 1 a 5 usando um loop while
document.write("Números de 1 a 5:<br>");
while (contador <= 5) {
    document.write(contador + "<br>");
    contador++; // Incrementa o contador
}

//Exemplo 2: soma dos números positivos
//Descrição: criar um programa que solicita números ao usuário até que ele insira um número negativo. O programa deve calcular e exibir a soma de todos os números positivos inseridos.
// Inicializa a variável de soma, o número inserido e uma string para armazenar os números
let soma = 0;
let numero = 0;
let numerosDigitados = ""; // String para armazenar os números digitados

// Solicita números ao usuário até que um número negativo seja inserido
// Inicia um laço que continua solicitando números ao usuário enquanto o número for maior ou igual a 0
while (numero >= 0) {
    // Solicita ao usuário que insira um número. O número é convertido de string para float com parseFloat
    numero = parseFloat(prompt("Digite um número (ou um número negativo para encerrar):"));
    
    // Verifica se o número digitado é maior ou igual a 0
    if (numero >= 0) {
        soma += numero; // Adiciona o número à soma se for positivo
        numerosDigitados += "<br>" + numero; // Adiciona o número à string
    }
}

// Exibe o resultado da soma e os números digitados
document.write("Números digitados: " + numerosDigitados + "<br>");
document.write("A soma dos números positivos inseridos é " + soma + ".");

//Usando Colchetes ([])
//let numeros = [1, 2, 3, 4, 5];
//console.log(numeros);

//let frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas[2]);

//Usando o Construtor Array
// let cores = new Array("Vermelho", "Azul", "Verde");
console.log(cores);
console.log(cores[0]); // Vermelho
console.log(cores[2]); // Verde



//Criando um Array Vazio e Adicionando Elementos
let lista = []; 
lista[0] = "Primeiro";
lista[1] = "Segundo";
console.log(lista);

let carros = ["Fusca", "Gol", "Uno"];
carros[1] = "Civic";
console.log(carros); // ["Fusca", "Civic", "Uno"]

carros[3] = "Corolla";
console.log(carros); // ["Fusca", "Civic", "Uno", "Corolla"]

//Métodos
//adicionar elementos
//let numeros = [1, 2, 3];
console.log(numeros); // [1, 2, 3]
numeros.push(4, 5);
console.log(numeros); // [1, 2, 3, 4, 5]


//let letras = ["b", "c", "d"];
letras.unshift("a");
console.log(letras); // ["a", "b", "c", "d"]

//let cores = ["Vermelho", "Azul", "Verde"];
cores.splice(1, 0, "Amarelo"); // Insere "Amarelo" na posição 1
console.log(cores); // ["Vermelho", "Amarelo", "Azul", "Verde"]

//remover elementos
//let numeros = [1, 2, 3, 4];
//let removido = numeros.pop();
console.log(numeros); // [1, 2, 3]
console.log(removido); // 4

let letras = ["a", "b", "c", "d"];
let removido = letras.shift();
console.log(letras); // ["b", "c", "d"]
console.log(removido); // "a"

//let cores = ["Vermelho", "Azul", "Amarelo", "Verde"];
cores.splice(1, 2); // Remove 2 elementos a partir da posição 1
console.log(cores); // ["Vermelho", "Verde"]


//acessar e pesquisar elementos
//let frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas[0]); // "Maçã"
console.log(frutas[2]); // "Laranja"

//let numeros = [10, 20, 30, 40];
console.log(numeros.indexOf(20)); // 1
console.log(numeros.indexOf(50)); // -1 (não encontrado)

let cores = ["Vermelho", "Azul", "Verde"];
console.log(cores.includes("Azul")); // true
console.log(cores.includes("Preto")); // false

//let numeros = [5, 10, 15, 20];
let maiorQue10 = numeros.find(num => num > 10);
console.log(maiorQue10); // 15

//transformar array em strig:
let frutas = ["Maçã", "Banana", "Laranja"];
let texto = frutas.join(", "); 
console.log(texto); // "Maçã, Banana, Laranja"

//let numeros = [1, 2, 3, 4, 5];
console.log(numeros.toString()); // "1,2,3,4,5"

let numeros = [10, 20, 30, 40, 50];

for (let i = 0; i < numeros.length; i++) {
    console.log(`Elemento ${i}: ${numeros[i]}`);
}

for (let numero of numeros) {
    console.log(numero);
}

//alert("Teste");

//variáveis
//var - variável do tipo global
// permite reatribuição
var animal = "gato";
console.log(animal);

//let  - variável local (escopo de bloco)
// permite reatribuição
let nomeCompleto = "Fulano da Silva"
nomeCompleto = "Pedro";
console.log(nomeCompleto)

//const - constante (não permite reatribuição)
const valor = 10;
//valor = 20; //erro, pq não permite reatribuição
console.log(valor);
//const nome; //ela precisa ser inicializada

//operadores aritméticos
// + * - ** % /
var vl1 = 10;
var vl2 = 12;
var soma = vl1 + vl2;
console.log(soma); 

//operadores de comparação
// == != === !== > < >= <=
console.log(10 == '10'); //igualdade (valor)
console.log(10 === '10'); //estritamente igual (tipo e valor)

//algoritmo: entrada + processamento + saída
var nome = window.prompt("Nome: ");
var idade = window.prompt("Idade: ");

console.log(nome + " " + idade);
console.log(idade);

//template literal (utiliza a crase)
console.log(`Seja bem-vindo ${nome} e você possui ${idade} ano(s)`);
document.writeln(`Seja bem-vindo ${nome} e você possui ${idade} ano(s)`)

//criar um sistema que realize a soma de dois números
var n1 = parseFloat(window.prompt("Valor 1: "));
console.log(typeof n1);//verificar o tipo
var n2 = parseFloat(window.prompt("Valor 2: "));
var resultado = n1 + n2;
document.writeln(`Resultado: ${resultado}`);

//estruturas de controle (if_else; for; switch; while; do-while)
if (n1 === 10){
    let n1;
    console.log("Valor igual a 10");
} else {
    console.log("valor não é igual a 10");
}

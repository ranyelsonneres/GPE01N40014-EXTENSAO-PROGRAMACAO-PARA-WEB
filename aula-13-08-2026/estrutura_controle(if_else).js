//Estrutura de controle (if e else)

//Exemplo 1: verificar o status do interruptor
let interruptor = "on";
if (interruptor == "on"){
     alert("Lampâda ligada!!");
 }
else {
	 alert("Lâmpada desligada!!");
}

//Exemplo 2: verificar a idade do usuário
//Utilize o operador de igualdade para comparar a idade do usuário com 18 e determinar se ele é maior, menor ou exatamente 18 anos.
// Solicita a idade do usuário
let idade = parseInt(prompt("Digite sua idade:"));

// Verifica se a idade é igual ou maior que 18 (adulto) ou menor que 18 (menor de idade)
if (idade === 18) {
    document.write("Você tem exatamente 18 anos.<br>");
} else if (idade > 18) {
    document.write("Você é um adulto.<br>");
} else {
    document.write("Você é menor de idade.<br>");
}


//Exemplo 3: comparação de senhas
//Verifique se as senhas digitadas são iguais, apresentando uma mensagem para o usuário.
// Solicita ao usuário para digitar a senha
let senha = prompt("Digite sua senha:");

// Solicita ao usuário para confirmar a senha
let confirmacaoSenha = prompt("Digite a senha novamente para confirmar:");

// Verifica se as senhas são iguais ou diferentes
if (senha === confirmacaoSenha) {
    //document.write("Senhas coincidem. Acesso permitido.<br>");
	alert("Senhas coincidem. Acesso permitido");
} else {
    //document.write("Senhas não coincidem.<br>");
	alert("Senhas não coincidem");
}

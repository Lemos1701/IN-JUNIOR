var numero = prompt("Digite um número:");
var resposta = "";
if(numero % 3 === 0){
    resposta += "fizz";
}
if(numero % 5 === 0){
    resposta += "buzz";
}
alert(resposta);
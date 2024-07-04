var notas = prompt("Diga as 3 notas separadas por espaço:")

notas = notas.split(" ").map(function(nota){
    return parseFloat(nota);
});

var acum = 0;
for(let i = 0; i < 3; i++){
    acum += notas[i];
}
if(acum/3 >= 6){
    alert("Aprovado");
}
else{
    alert("Reprovado");
}

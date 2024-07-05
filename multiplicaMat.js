function lerMat(){
    let dimen = prompt("Linha X Coluna. Separado por espaço:");
    
    dimen = dimen.split(" ").map(function(tam){
        return parseInt(tam);
    });

    let mat = [];
    
    for(let i = 0; i < dimen[0]; i++){
        mat.push(prompt("Elementos separados por espaço:").split(" ").map(function(elem){
            return parseInt(elem);
        }));
        if(mat[i].length != dimen[1]){
            console.log("Entrada de matriz invalida.");
            return null;
        }
    }

    if(mat.length != dimen[0]){
        console.log("Entrada de matriz invalida.");
        return null;
    }

    return mat;
}

function multiplicaMat(mat1, mat2){
    if (mat1[0].length !== mat2.length) {
        console.log("As matrizes não podem ser multiplicadas devido a dimensões incompatíveis.");
        return null;
    }

    let aux = [];
    
    for (let i = 0; i < mat1.length; i++) {
        aux.push([]);
        for (let j = 0; j < mat2[0].length; j++) {
            aux[i][j] = 0;
            for (let k = 0; k < mat2.length; k++) {
                aux[i][j] += mat1[i][k] * mat2[k][j];
            }
        }
    }
    
    let matFormatada = "";
    for(let i = 0; i < aux.length; i++){
        matFormatada += aux[i].join(" ") + "\n";
    }

    alert(matFormatada);
}

var mat1 = lerMat();
var mat2 = lerMat();

multiplicaMat(mat1, mat2);
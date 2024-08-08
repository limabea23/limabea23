let idadeMinima = 7;
let idadeAluno = 6;
let aulaKids = 7 - 12;
let aulaTeen = 13 - 18;
let aulaAdult = 18 - 99; 

if (idadeAluno >= idadeMinima && idadeAluno) {
    console.log("Matrícula realizada com sucesso!");
} else {
    console.log("Desculpe, você ainda não pode se matricular nesta escola!")
}

for (let i = 1; i <= idadeAluno; i++){
    idadeAluno += "👏🏾";
    if (i % 5 === 0){
        idadeAluno += "🎉";
    }
}
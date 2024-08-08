//REFAZENDO

let quantidadeIngresso = 12;
let batatasPromo = 0;
let nome = "Beatriz";

for (let i = 1; i <= quantidadeIngresso; i++){
    if (i % 3 === 0){
        batatasPromo++;
    }
}

console.log("Parabéns," + nome + "você ganhou" + batatasPromo + "! Venha retirar nas hamburguerias ou restaurante central do parque." );

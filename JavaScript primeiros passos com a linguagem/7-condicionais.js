console.log(`Trabalhando com condicionais`);
const listaDeDistinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDistinos);

// if(idadeComprador >= 18){
//     console.log("Comprador maior de idade");
//     listaDeDistinos.splice(1,1); // removendo item
// }else if(estaAcompanhada == true){
//         console.log("Comprador está acompanhado.");
//         listaDeDistinos.splice(1,1); // removendo item
//     }else{
//     console.log("Não é maior de idade e não posso vender.");
// }

if (idadeComprador >= 18 ||estaAcompanhada == true) {
    console.log("Boa Viagem");
    listaDeDistinos.splice(2, 1); // removendo item
} else {
    console.log("Não é maior de idade e não posso vender.");
}

console.log("Embarque: \n\n");
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar.");
}



console.log(listaDeDistinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);


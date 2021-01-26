console.log(`\n Trabalhando com condicionais`);
const listaDeDistinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possíveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDistinos);
const podeComprar = idadeComprador >= 18 ||estaAcompanhada == true;

let contador = 0;
let destinoExite = false;
while(contador < 3){
    
    if(listaDeDistinos[contador]== destino){
        destinoExite = true;
        break;
    }
    contador++
}

console.log("Destino existe: ", destinoExite);

if(podeComprar && destinoExite){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!");
}

for(let i = 0; i < 3; i++){
    
    if(listaDeDistinos[i]== destino){
        destinoExite = true;
    }
}
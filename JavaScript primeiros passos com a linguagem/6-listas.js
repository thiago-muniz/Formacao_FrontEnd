console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDistinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
listaDeDistinos.push(`Curitiba`) // adicionando um item na lista
console.log("Destinos possíveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDistinos);


listaDeDistinos.splice(1,1);
console.log(listaDeDistinos);
console.log(listaDeDistinos[1], listaDeDistinos[0]);

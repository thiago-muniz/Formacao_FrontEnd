console.log("Trabalhando com atribuição de variáveis");
const idade = 29;
let nome = "Ricardo";
const sobrenome = "bugan";

console.log(nome + sobrenome); //sem espaço entre as palavras.
console.log(nome , sobrenome);
//console.log(nome + " " +sobrenome);
console.log(`Meu nome é ${nome} ${sobrenome}`);
// let é mutável e const é imutável
nome = nome + sobrenome;
console.log(nome);

const nomeCompleto = nome + sobrenome;
console.log(nomeCompleto);

let contador = 0;
contador = contador + 1;
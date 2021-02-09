//Objeto literal - não tem como passar parâmetros para criação de novos objetos (livros)

// const Livro = {
//     nome: "React Native",
//     editora: "Casa do Código",
//     páginas: 185,
//     anunciar: function(){
//         console.log("A Alura indica o livro" + this.nome + "!");
//     }
// }

// Livro.anunciar();

//Função - prototype
// const Livro = function(nome, editora, paginas){
//     gNome = nome;
//     gEditora = editora;
//     gPaginas = paginas;

//     this.getNome = function(){
//         return gNome;
//     }
//     this.getEditora = function(){
//         return gEditora;
//     }
//     this.getPaginas = function(){
//         return gPaginas;
//     }
// }

// const GraphQL = new Livro("GraphQL", "Casa do Código", 143);
// console.log(GraphQL.getNome());
// console.log(GraphQL.getEditora());
// console.log(GraphQL.getPaginas());

class Livro{
    constructor(nome, editora, paginas){
        this.nome = nome;
        this.editora = editora;
        this.paginas = paginas;
    }
    
    anunciarTitulo(){
        console.log(`Título: ${this.nome}`);
    }

    descreverTitulo(){
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas`);
    }
}

const Nodejs = new Livro("Primeiros passos com NodeJs", "Casa do Código", 195);
Nodejs.anunciarTitulo();
Nodejs.descreverTitulo();

class LivroColecao extends Livro{
    constructor(nome, nomeColecao){
        super(nome);
        this.nomeColecao = nomeColecao;
    }

    descreverColecao(){
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`);
    }
}

const LogicaDeProgramacao = new LivroColecao("Lógica de Programação", "Comece a programar");
LogicaDeProgramacao.descreverColecao();
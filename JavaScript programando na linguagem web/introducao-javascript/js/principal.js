var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < 5; i++){
    var paciente = pacientes[i];//paciente escopo local 
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    pesoEhValido = true;
    alturaEhValida = true;

    if(peso<=0 || peso>=1000){
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        //paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add("paciente-invalido"); 
    }
    if(altura<=0||altura>=3.00){
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if(alturaEhValida && pesoEhValido){
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2); 
    }else{
        tdImc.textContent = "Altura e/ou peso inválidos!";
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();// impede o comportamento padrão de reiniciar a página

    var form = document.querySelector("#form-adiciona");//pega o formulário
    
    var nome = form.nome.value;// extrai o valor de cada input do formulario
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.altura.value;

    var pacienteTr = document.createElement("tr");// cria uma tr nova

    var nometd = document.createElement("td");// cria uma td nova
    var pesotd = document.createElement("td");
    var alturatd = document.createElement("td");
    var gorduratd = document.createElement("td");
    var imctd = document.createElement("td");

    nometd.textContent = nome;// atribui ao td o valor extraido dos inputs do formulario
    pesotd.textContent = peso;
    alturatd.textContent = altura;
    gorduratd.textContent = gordura;

    pacienteTr.appendChild(nometd);//insere a td dentro da tr criada
    pacienteTr.appendChild(pesotd);
    pacienteTr.appendChild(alturatd);
    pacienteTr.appendChild(gorduratd);
    
    var tabela = document.querySelector("#tabela-pacientes");// pega a tabela
    tabela.appendChild(pacienteTr);//insere a tr dentro da tabela
    
});









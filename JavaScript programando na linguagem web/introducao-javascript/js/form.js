var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();// impede o comportamento padrão de reiniciar a página
    
    //pega o formulário
    var form = document.querySelector("#form-adiciona");
    
    // extrai o valor de cada input do formulario
    var paciente = obtemPacienteDoFormulario(form);
    
    // cria a tr ea td do paciente
    var pacienteTr = montaTr(paciente);
    
    // pega a tabela
    var tabela = document.querySelector("#tabela-pacientes");
    //insere a tr dentro da tabela
    tabela.appendChild(pacienteTr);
    
    form.reset();
    
});

function obtemPacienteDoFormulario(form){
    var paciente = { 
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){

        // cria uma tr nova
        var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente");
    
        // cria as td's e adiciona dentro da tr
        pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
        pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
        pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
        pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
        pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

        return pacienteTr;

}
function montaTd(dado, classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}
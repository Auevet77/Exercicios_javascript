function Aposentadoria(){
    let Nome = prompt("Digite o nome do empregado:");
    let AnoNascimento = parseInt(prompt("Digite o ano de nascimento:"));
    let AnoAdmissao = parseInt(prompt("Digite o ano de admissão na empresa:"));
    let Idade = 0;
    let TempoDeTrabalho = 0;

    Idade = 2022 - AnoNascimento;
    TempoDeTrabalho = 2022 - AnoAdmissao;

    if(Idade >= 65){
        alert("Requer aposentadoria!");
    }
    else if(TempoDeTrabalho >= 30){
        alert("Requer aposentadoria!");
    }
    else if(Idade > 60 && TempoDeTrabalho > 25){
        alert("Requer aposentadoria!")
    }
    else {
        alert("Não requerer!")
    }

    document.write(Nome + "<br>")
    document.write(" Idade: "+ Idade + " anos.<br>")
    document.write(" Tempo de Trabalho: " + TempoDeTrabalho + " anos.<br>")    
    
}
function ValidarFormulario(){
let erro = "";

    if(document.getElementById("Nome").value.trim() == ""){
        erro = "- O campo nome é obrigatório\n"
    }

    if(document.getElementById("Telefone").value.trim() ==""){
        erro = erro + "- O campo telefone é obrigatório\n"
    }

    if (erro != ""){
        alert("ATENÇÃO!\n\n" + erro);
        return false;
    }
    else{
        document.getElementById("frmContato").submit();
    }
}
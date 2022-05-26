function ConverterTemperatura(){

    if(document.getElementById("Centigrados").value == "" && document.getElementById("Fahrenheit").value == ""){
        alert("O preenchimento de uma temperatura é obrigatório!")
        // document.getElementById("Centigrados").focus();
        return;
    }

    if(document.getElementById("Fahrenheit").value == ""){
    let c = document.getElementById("Centigrados").value;
    let f = (9 * c + 160) / 5;
    document.getElementById("Fahrenheit").value = f;

    if(f > 50){
        document.getElementById("Fahrenheit").style.backgroundColor = "red";
    }else {
        document.getElementById("Fahrenheit").style.backgroundColor = "blue";
    }

    }else {
    let f = document.getElementById("Fahrenheit").value;
    let c = (f - 32) * 5  / 9;
    document.getElementById("Centigrados").value = c;

    }

}

function limparDados(){
    document.getElementById("Fahrenheit").value = "";
    document.getElementById("Centigrados").value = "";
}
function CalculoCombustivel(){
    let TempViagem = document.getElementById("TempViagem").value ;
    let VelMed = document.getElementById("VelMed").value ;
    let Distancia = TempViagem * VelMed ;
    let LitrosUsados = Distancia / 12 ;

    document.getElementById("Distancia").value = Distancia;
    document.getElementById("LitrosUsados").value = LitrosUsados;
}

function limparDadosCombustivel(){
    document.getElementById("TempViagem").value = "";
    document.getElementById("VelMed").value = "";
    document.getElementById("Distancia").value = "";
    document.getElementById("LitrosUsados").value = "";
}
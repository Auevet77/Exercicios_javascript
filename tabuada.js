function Tabuada(){
    let Numero = parseInt(prompt("Digite um número:"));
    let i = 0;
    let  Multiplicacao = 0;

    for(i=0; i<11; i++){
        Multiplicacao = Numero * i
            document.write(Numero + " x " + i + " = " + Multiplicacao + "<br>")
    }
}
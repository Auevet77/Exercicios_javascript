function MediaDosPares(){
    let i = 0;
    let Soma = 0;
    let Media = 0;

    let Numero = parseInt(prompt("Digite um valor qualquer ou '0' para terminar:"));

    while(Numero != 0){
        if(Numero % 2 == 0 && Numero != 0){
            Soma = Soma + Numero;
            i = i + 1;
            Numero = parseInt(prompt("Digite um valor qualquer ou '0' para terminar:"));
        }
        else{
            Numero = parseInt(prompt("Digite um valor qualquer ou '0' para terminar:"));
        }
    }
    if(i == 0){
    alert("Não foi digitado nenhum número par!")        
    }
    else{
    Media = Soma / i
    alert("A média aritmética dos números pares digitados é " + Media)
    }
}
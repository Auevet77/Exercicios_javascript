function ParOuImpar(){
    let numero = parseInt(prompt("Digite um número:"));
    let resto = 0; 
    
    resto = numero % 2;

    console.log(numero)
    console.log(resto)

    if (resto == 0){
        alert("O número digitado (" + numero + ") é par");
    }
    else{
        alert("O número digitado (" + numero + ") é ímpar");
    }
}
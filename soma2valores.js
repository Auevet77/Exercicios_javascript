function SomaDosDoisMaiores(){
    let valor1 = parseInt(prompt("Digite o primeiro valor:"));
    let valor2 = parseInt(prompt("Digite o segundo valor:"));
    let valor3 = parseInt(prompt("Digite o terceiro valor:"));
    let soma = 0;

    if(valor1 < valor2 && valor1 < valor3) {
        soma = valor2 + valor3;
    }
    else if (valor2 < valor1 && valor2 <valor3){
        soma = valor1 + valor3;
    }
    else if (valor3 < valor1 && valor3 < valor2){
        soma = valor1 + valor2;
    }
    else if(valor1 == valor2 && valor1 == valor3){
        soma = valor1 + valor2;
    }
    else if(valor1 == valor2){
        soma = valor1 + valor3            
    }
    else if(valor1 == valor3){
        soma = valor1 + valor2        
    }
    else{
        soma = valor2 + valor3
    }
    console.log(soma)

    // alert("A soma dos dois maiores valores digitados é: " + soma)
    document.write("A soma dos dois maiores valores digitados é: " + soma)
    
}
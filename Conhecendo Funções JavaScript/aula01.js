function calcularIMC( peso , altura ) {
    return peso /Math.pow(altura , 2);
}

function classificarIMC(IMC) {
    if ( IMC < 18.5 ) {
        return ("Você está abaixo do peso ideal!");
        return (IMC.toFixed(0));
    } 
    else if ( IMC >= 18.5 && IMC < 25 ) {
        return ("Você está com o peso ideal!");
        return (IMC.toFixed(0));
    }
    else if ( IMC >= 25 && IMC < 30 ) {
        return ("Você está acima do peso ideal!");
        return (IMC.toFixed(0));
    }
    else if ( IMC >= 30 && IMC < 40 ) {
        return ("Você está com obesidade !");
        return (IMC.toFixed(0));
    }
    else {
        return ("Você está com obesidade mórbida !");
        return (IMC.toFixed(0));
    }
}

function main() {
    let peso = 78;
    const altura = 1.70;
    
    const  IMC = calcularIMC(peso, altura);
    console.log(classificarIMC(IMC))
}

main();
let peso = 78;
const altura = 1.70;

let IMC = peso / (altura * altura)
if ( IMC < 18.5 ) {
    console.log("Você está abaixo do peso ideal!")
    console.log(IMC)
} 
else if ( 18.5 >= IMC < 25 ) {
    console.log("Você está com o peso ideal!")
    console.log(IMC)
}
else if ( 25 >= IMC <= 30 ) {
    console.log("Você está acima do peso ideal!")
    console.log(IMC)
}
else if ( 30 >= IMC <= 40 ) {
    console.log("Você está com obesidade !")
    console.log(IMC)
}
else {
    console.log("Você está com obesidade mórbida !")
    console.log(IMC)
}

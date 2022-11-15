let nota01 = 6.5;
let nota02 = 7;
let nota03 = 5.8;

let media = ((nota01 + nota02 + nota03) / 3)

if ( media < 5 ) {
    console.log("Você está reprovado! Sua nota é", media.toFixed(2))
} 
else if ( 5 <= media < 7 ) {
    console.log("Você está em recuperação! Sua nota é", media.toFixed(2))
} else {
    console.log("Você está aprovado! Parabéns! Sua nota é", media.toFixed(2))
}

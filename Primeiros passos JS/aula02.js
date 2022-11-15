let combustivel = "gasolina";
let distviagem = 150;
const kmlitro = 12;

if (combustivel === "etanol") {
    const etanol = 4.89
    const viagem = ((distviagem/kmlitro) * etanol);
    console.log ("O valor gasto na viagem é de R$", viagem.toFixed(2));
} 
else if (combustivel === "gasolina") {
    const gasolina = 5.64
    const viagem = ((distviagem/kmlitro) * gasolina);
    console.log ("O valor gasto na viagem é de R$", viagem.toFixed(2));
}

let combustivel = 5.49;
let distviagem = 364;
const kmlitro = 12;

const viagem = ((distviagem/kmlitro) * combustivel);

console.log ("O valor gasto na viagem é de R$", viagem.toFixed(2));

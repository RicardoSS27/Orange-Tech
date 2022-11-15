let produto = 5.49;
let formapag = "Pix";

if (formapag === "Débito") {
    const valor = produto - (produto * (10/100));
    console.log("O valor a ser pago é R$" , valor.toFixed(2));
} 
else if (formapag === "Pix" || formapag === "Dinheiro") {
    const valor = produto - (produto * (15/100));
    console.log("O valor a ser pago é R$" , valor.toFixed(2));
}
else if (formapag === "Parcelado2x") {
    const valor = produto;
    console.log("O valor a ser pago é R$" , valor.toFixed(2));
} 
else if (formapag === "Parceladox") {
    const valor = produto + (produto * (10/100));
    console.log("O valor a ser pago é R$" , valor.toFixed(2));
}


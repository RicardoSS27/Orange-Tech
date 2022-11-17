const valorproduto = 5;
const formapag = "Débito";


function aplicardesconto(valorproduto , desconto) {
    return preço = valorproduto + (valorproduto * (desconto/100))
}

function aplicarjuros(valorproduto , juros) {
    return preço = valorproduto + (valorproduto * (valorproduto * juros/100))
}
function Valorpago(preço) {
    if (formapag === "Débito") {
        console.log("O valor a ser pago é R$" , aplicardesconto(5 , 10).toFixed(2));
    }
    else if (formapag === "Pix" || formapag === "Dinheiro") {
        console.log("O valor a ser pago é R$" , aplicardesconto( 5 , 15).toFixed(2));
    }
    else if (formapag === "Parcelado2x") {
        console.log("O valor a ser pago é R$" , valorproduto.toFixed(2));
    } 
    else if (formapag === "Parcelado+2x") {
        console.log("O valor a ser pago é R$" , aplicarjuros( 5 , 10).toFixed(2));
    }
    
}
Valorpago();
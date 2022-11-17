class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome , peso , altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    descrever() {
        console.log(`Olá! Meu nome é ${this.nome} e este é meu IMC ${this.CalcularIMC(this.peso , this.altura).toFixed(1)}!`);
    }

    CalcularIMC() {
        return this.peso / (this.altura ** 2);
    }
}

const José = new Pessoa("José" , 70 , 1.75);
José.descrever();
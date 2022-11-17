class Pessoa {
    nome;
    idade;
    DatadeNascimento;
    
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const Ricardo = new Pessoa("Ricardo" , 19);

Ricardo.descrever();


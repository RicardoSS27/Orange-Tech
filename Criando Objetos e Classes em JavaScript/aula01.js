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
        console.log("Meu nome é ${this.nome} e minha idade é ${this.idade}");
    }
}

const Ricardo = new Pessoa("Ricardo" , 25);
Ricardo.nome = "Ricardo";
Ricardo.idade = 19;
Ricardo.DatadeNascimento = 2022 - 19;

const Emanuel = new Pessoa();
Emanuel.nome = "Emanuel";
Emanuel.idade = 22;
Emanuel.DatadeNascimento = 2022 - 22;

Ricardo.descrever();


class Pessoa {
    nome;
    idade;

    constructor(nome , idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function CompararPessoas(p1 , p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome} .`);
    } 
    else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho que ${p1.nome} .`);
    } 
    else
    console.log(`${p1.nome} e ${p2.nome} têm a mesma idade .`);
}

const Ricardo = new Pessoa("Ricardo" , 19);
const Emanuel = new Pessoa("Emanuel" , 22);

CompararPessoas(Ricardo , Emanuel);
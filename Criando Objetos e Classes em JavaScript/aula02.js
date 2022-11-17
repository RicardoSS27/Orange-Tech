class Carro {
    marca;
    cor;
    KmporLitro;

    constructor(marca , cor , KmporLitro) {
        this.marca = marca;
        this.cor = cor;
        this.KmporLitro = KmporLitro;

    }

    descrever() {
        console.log(`O carro escolhido foi ${this.marca} e sua cor é ${this.cor}, fazendo em média ${this.KmporLitro} Km rodados por Litro.`);
        console.log(`O valor gasto de Iguatu para Piquet Carneiro é R$ ${this.CalcularGastodoPercurso(90 , 5.49).toFixed(2)}.`)
    }

    CalcularGastodoPercurso(distancia , preçocombustivel) {
        return ((distancia / this.KmporLitro) * preçocombustivel);
    }
}

const Ferrari = new Carro("Ferrari", "vermelho", 4);
Ferrari.descrever();
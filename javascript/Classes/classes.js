class Funcionario {
    constructor (nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        console.log(`Meu nome é ${this.nome} tenho ${this.idade} anos e sou ${this.cargo}.`);
    }

    trabalhar() {
        console.log(`${this.nome} está trabalhando...`);
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        console.log(`${this.nome} está gerenciando o ${this.departamento}.`);
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        console.log(`${this.nome} está programando na linguagem ${this.linguagem}.`);
    }
}

const gerente = new Gerente('Lucas', 25, 'gerente de produção', 'departamento de produtos');

gerente.seApresentar();
gerente.gerenciar();
gerente.trabalhar();


const desenvolvedor = new Desenvolvedor(`Pedro Henrique`, 21, 'desenvolvedor Back-End', 'C#');

desenvolvedor.seApresentar();
desenvolvedor.programar();
desenvolvedor.trabalhar();
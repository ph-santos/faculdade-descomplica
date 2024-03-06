class Funcionario {
  constructor(nome, idade, cargo) {
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

document.getElementById('enviar').addEventListener('click', e => {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;
  const cargo = document.getElementById('cargo').value;
  const departamento = document.getElementById('departamento').value;
  const linguagemDeProgramacao = document.getElementById('linguagemDeProgramacao').value;

  if (nome === '') {
    alert('Informe o seu nome!');
    return;
  }

  if (idade === '') {
    alert('Informe a sua idade!');
    return;
  }

  if (cargo === '') {
    alert('Informe o seu cargo!');
    return;
  }

  if (departamento === '' && cargo !== 'Desenvolvedor') {
    alert('Informe o seu departamento!');
    return;
  }

  if (linguagemDeProgramacao === '' && cargo !== 'Gerente') {
    alert('Informe a sua linguagem de Programacao!');
    return;
  }

  //Verificação para saber qual objeto deverar ser criado
  if (cargo === 'Desenvolvedor') {
    novoDesenvolvedor(nome, idade, cargo, linguagemDeProgramacao);

    //Limpa os campos do formulario
    document.getElementById('nome').value = '';
    document.getElementById('idade').value = '';
    document.getElementById('cargo').value = '';
    document.getElementById('departamento').value = '';
    document.getElementById('linguagemDeProgramacao').value = '';
  } else {
    novoGerente(nome, idade, cargo, departamento);

    //Limpa os campos do formulario
    document.getElementById('nome').value = '';
    document.getElementById('idade').value = '';
    document.getElementById('cargo').value = '';
    document.getElementById('departamento').value = '';
    document.getElementById('linguagemDeProgramacao').value = '';
  }
});

//Função para criar um novo objeto da classe Desenvolvedor
function novoDesenvolvedor(nome, idade, cargo, linguagemDeProgramacao) {
  const desenvolvedor = new Desenvolvedor(nome, idade, cargo, linguagemDeProgramacao);

  desenvolvedor.seApresentar();
  desenvolvedor.programar();
  desenvolvedor.trabalhar();
}

//Função para criar um novo objeto da classe Gerente
function novoGerente(nome, idade, cargo, departamento) {
  const gerente = new Gerente(nome, idade, cargo, departamento);

  gerente.seApresentar();
  gerente.gerenciar();
  gerente.trabalhar();
}

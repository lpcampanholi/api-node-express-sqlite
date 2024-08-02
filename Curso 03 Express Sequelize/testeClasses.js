class Animal {
  constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
  };
  apresentar() {
    return `Olá, meu nome é ${this.nome} e sou um(a) ${this.tipo}`;
  };
};

const piratinha = new Animal("Piratinha", "Calopsita");
console.log(piratinha.apresentar());

class Cachorro extends Animal {
  constructor(nome) {
    super(nome, "Cachorro");
  };
};

const meggy = new Cachorro("Meggy");
console.log(meggy.apresentar());

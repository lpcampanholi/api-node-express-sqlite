class Animal {
  constructor(nome) {
    this.nome = nome;
  }
  falar() {
    console.log(`${this.nome} faz um som.`);
  }
}
class Cachorro extends Animal {
  constructor(nome, raca) {
    super(nome); // Chama o construtor da classe pai (Animal)
    this.raca = raca;
  }
  falar() {
    super.falar(); // Chama o método falar() da classe pai
    console.log(`${this.nome} late.`);
  }
}
const cachorro = new Cachorro('Rex', 'Labrador');
cachorro.falar();  
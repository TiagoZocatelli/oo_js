function Animal(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Animal.prototype.falar = function() {
    console.log(`${this.nome}, que tem ${this.idade} anos, faz um barulho.`);
}

function Cachorro(nome, idade) {
    Animal.call(this, nome, idade); // Chama o construtor do pai
}

Cachorro.prototype = Object.create(Animal.prototype);
Cachorro.prototype.constructor = Cachorro;

Cachorro.prototype.falar = function() {
    console.log(`${this.nome}, que tem ${this.idade} anos, late.`);
}

function Gato(nome, idade) {
    Animal.call(this, nome, idade); // Chama o construtor do pai
}

Gato.prototype = Object.create(Animal.prototype);
Gato.prototype.constructor = Gato;

Gato.prototype.falar = function() {
    console.log(`${this.nome}, que tem ${this.idade} anos, mia.`);
}

const cachorro1 = new Cachorro('Rex', 4);
console.log(cachorro1.constructor === Cachorro); // true
console.log(cachorro1 instanceof Animal);        // true
cachorro1.falar();                               // Rex, que tem 4 anos, late.

const gato1 = new Gato('Whiskers', 2);
console.log(gato1.constructor === Gato);         // true
console.log(gato1 instanceof Animal);            // true
gato1.falar();                                   // Whiskers, que tem 2 anos, mia.

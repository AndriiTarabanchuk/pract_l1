interface Walkable {
  walk(): void;
}

interface Eatable {
  eat(): void;
}

class Animal implements Walkable, Eatable {
  walk() {
    console.log("The animal walks...");
  }

  eat() {
    console.log("The animal eats...");
  }
}

const animal = new Animal();

console.log(Animal);
console.log(animal.walk());

export {};

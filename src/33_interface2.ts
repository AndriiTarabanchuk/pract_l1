type AnimalName = {
  name: string;
};

type AnimalAge = {
  age: number;
};

type Animal = AnimalName & AnimalAge;

let dog: Animal = {
  name: "Fido  Great",
  age: 5,
};
console.log("dog", dog);

export {};

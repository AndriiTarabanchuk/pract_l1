// interface Dog extends Animal {
//   bark: string;
// }
interface Animal {
  name: string;
}

interface Animal {
  age: number;
}

let dog: Animal = {
  name: "Fido",
  age: 5,
};
console.log("dog", dog);
export {};

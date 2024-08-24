type Person = {
  name: string;
  age?: number; // age є опціональною властивістю
};

const alice: Person = { name: "Alice", age: 27 };
const bob: Person = { name: "Bob" }; // age не вказано, це припустимо

console.log("alice", alice);
console.log("bob", bob);
export {};

type User = {
  name: string;
  age: number;
};

// let users1: User[] = [{ name: "Tom", age: "30" }]; // bad practice
let users: User[] = [{ name: "Tom", age: 30 }]; // good practice
console.log(users);
export {};

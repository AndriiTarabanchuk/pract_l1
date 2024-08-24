// ???  Part 2

// let user1: { name: string; age: number } = {
//   age: 30,
// };

// let userNameLikeNumber: { name: string; age: number } = {
//   name: 10,
//   age: 30,
// };

// export {};

type User = {
  name: string;
  age: number;
};

let user: User = {
  name: "Tom",
  age: 30,
};

let userJack: User = {
  name: "Jack",
  age: 25,
};

console.log("user", user);
console.log("userJack", userJack);
export {};

type User = {
  id: string;
  name: string;
  email: string;
};

type Users = {
  [id: string]: User;
};

let users: Users = {};

let user: User = {
  id: "1",
  name: "Alex",
  email: "alex@example.com",
};

let user2: User = {
  id: "2",
  name: "Jon Gold",
  email: "gold@example.com",
};
let user3: User = {
  id: "3",
  name: "Dagni Taggart",
  email: "dagni@example.com",
};

users[user.id] = user;
users[user2.id] = user2;
users[user3.id] = user3;

console.log("user", user);
console.log("users", users);
export {};

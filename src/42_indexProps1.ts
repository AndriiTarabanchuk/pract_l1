type Person = {
  name: string;
  [x: string]: string;
};

const user: Person = {
  name: "Alex",
  gender: "MAN",
  country: "Ukraine",
};

console.log(user);
export {};

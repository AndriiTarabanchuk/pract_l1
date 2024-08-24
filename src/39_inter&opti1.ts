interface IPerson {
  name?: string;
  age: number;
}

interface IPerson {
  name?: string;
  age: number;
}

const mango: IPerson = {
  name: "mango",
  age: 2,
};

const poly: IPerson = {
  age: 5,
};
console.log("mango", mango);
console.log("poly", poly);

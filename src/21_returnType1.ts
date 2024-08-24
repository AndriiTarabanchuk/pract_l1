function greet(): string {
  return "100"; // Error: Type 'number' is not assignable to type 'string'
}

let result = greet();
console.log(result);

const greet1 = (): string => {
  return "Hello, world!";
};

let result1 = greet1();
console.log(result1);

export {};

function greeting() {
  return "Hello, world!";
}

type Greeting = ReturnType<typeof greeting>; // 'string'

function multiply(a: number, b: number) {
  return a * b;
}

type MultiplyResult = ReturnType<typeof multiply>; // 'number'

export {};
// console.log(MultiplyResult);

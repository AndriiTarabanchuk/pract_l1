let myFunc: (firstArg: string, secondArg: number) => void;

myFunc = (first: string, second: number) => {
  console.log(`First: ${first}, Second: ${second}`);
};

myFunc("Hello", 42); // Висновок: "First: Hello, Second: 42"

export {};

function arrayLogger<T extends Array<string>>(array: T): void {
  array.forEach((item) => console.log(item));
}

arrayLogger(["Hello", "World"]); // Ok
arrayLogger([1, 2, 3]); // Error

export {};

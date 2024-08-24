function extractValue<T extends object, U>(obj: T, key: U) {
  return obj[key]; // Type 'U' cannot be used to index type 'T'
}

extractValue({ name: "John" }, "name");
console.log(extractValue({ name: "John" }, "name"));

export {};

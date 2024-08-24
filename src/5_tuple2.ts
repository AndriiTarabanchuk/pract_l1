let fixed: [string, number];

fixed = ["Text", 10];

fixed.push("Add this text"); //?????????
console.log(fixed);
export {};

let tuple: [string, ...number[]];

tuple = ["hello", 42, 100, 200]; // OK
tuple.push(1);
console.log(tuple);

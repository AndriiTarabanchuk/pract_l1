// function identity<T>(arg: T): T {
//   return arg;
// }

// let output1 = identity<string>("myString");
// let output2 = identity<number>(100);

// let output11 = identity("myString");
// let output21 = identity(100);

function firstElement<T>(arr: T[]): T {
  return arr[0];
}

let numbers = [1, 2, 3, 4, 5];
let firstNum = firstElement(numbers);

let strings = ["a", "b", "c", "d"];
let firstStr = firstElement(strings);

console.log("firstNum", firstNum);
console.log("firstStr", firstStr);
export {};

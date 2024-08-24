let someValue: unknown = "this is a string!";

let strLength1: number = (<string>someValue).length;
// or
let strLength2: number = (someValue as string).length;

let strLength3: number = someValue.length;

console.log("strLength1", strLength1);
console.log("strLength2", strLength2);
console.log("strLength3", strLength3);
export {};

// const input = document.getElementById("inputEmail");

// input.value = "test@test.ts";

// export {};

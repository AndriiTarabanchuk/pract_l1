const arr: Readonly<string[]> = ["One", "Two", "Three"];
console.log("arr", arr);

arr.push("Four"); // Error: Property 'push' does not exist on type 'readonly string[]'.
console.log("arr", arr);
export {};

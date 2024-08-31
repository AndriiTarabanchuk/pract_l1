const arr: Readonly<string[]> = ["One", "Two", "Three"];

arr.push("Four"); // Error: Property 'push' does not exist on type 'readonly string[]'.

export {};

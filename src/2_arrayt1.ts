let arrString: string[];

// arrString = ["Text", 1, false, 1n]; //bad practice
arrString = ["Text", "1", "false", "1n"]; //good practice ['Text', '1', 'false', '1n']

console.log("arrString", arrString);
export {};

let arrNumber: number[];

// arrString = ["Text", 1, false, 1n]; //bad practice
arrNumber = [1, 0o7, 0x0a, 0b11]; //[1, 7, 10, 3]

console.log("arrNumber", arrNumber);
export {};

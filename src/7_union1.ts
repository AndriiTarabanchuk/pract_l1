let mixedType: string | number | boolean;

mixedType = "string"; // OK
mixedType = 10; // OK
mixedType = true; // OK
mixedType = {}; // Error: Type '{}' is not assignable to type 'string | number | boolean'.

export {};

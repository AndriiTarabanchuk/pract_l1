//Task 1 Basic Types in TypeScript
type Order = {
  orderId: number;
  customerName: string;
  isDelivered: boolean;
};
function formatOrder(order: Order): string {
  return `Order ${order.orderId}: ${order.customerName} - ${
    order.isDelivered ? "Delivered" : "Pending"
  }`;
}
// Example usage:
const order1: Order = {
  orderId: 101,
  customerName: "John Doe",
  isDelivered: false,
};
console.log("----Task 1 Basic Types in TypeScript"); // Output: "Order 101: John Doe - Pending"
console.log(formatOrder(order1)); // Output: "Order 101: John Doe - Pending"

//Task 2 Object Typisation in TypeScript
type UserProfile = {
  username: string;
  age: number;
  isActive: boolean;
};
function displayUserProfile(profile: UserProfile): string {
  return `${profile.username} is ${profile.age} years old and is currently ${
    profile.isActive ? "active" : "inactive"
  }.`;
}
// Example usage:
const userProfile: UserProfile = {
  username: "alice123",
  age: 28,
  isActive: true,
};
console.log("----Task 2 Object Typisation in TypeScript"); // Output: "alice123 is 28 years old and is currently active."
console.log(displayUserProfile(userProfile)); // Output: "alice123 is 28 years old and is currently active."

//Task 3 Array Typisation in TypeScript
function calculateTotal(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}
// Example usage:
const numbersArray: number[] = [10, 20, 30, 40];
console.log("----Task 3 Array Typisation in TypeScript"); // Output: 100
console.log(calculateTotal(numbersArray)); // Output: 100

//Task 4 Using the any Type in TypeScript
function logDetails(value: any): void {
  console.log(`Value: ${value}, Type of value: ${typeof value}`);
}
// Example usage:
console.log("----Task 4 Using the any Type in TypeScript"); // Output: Value: Hello, TypeScript!, Type of value: string
logDetails("Hello, TypeScript!"); // Output: Value: Hello, TypeScript!, Type of value: string
logDetails(""); // Value: , Type of value: string
logDetails(42); //  Value: 42, Type of value: number
logDetails(NaN); // Value: NaN, Type of value: number
logDetails(Infinity); // Value: Infinity, Type of value: number
logDetails(-Infinity); // Value: -Infinity, Type of value: number
logDetails(true); //  Value: true, Type of value: boolean
logDetails({ as: 12 }); // Value: [object Object], Type of value: object
logDetails([1, 2, 3]); // Value: 1,2,3, Type of value: object
logDetails(1n); //Value: 1, Type of value: bigint
logDetails(null); // Value: null, Type of value: object
logDetails(undefined); // Value: undefined, Type of value: undefinedє

//Task 5 Using the unknown Type in TypeScript
function safelyParseJson(jsonString: string): unknown {
  try {
    const result: unknown = JSON.parse(jsonString);
    if (typeof result === "object" && result !== null) {
      return result; // Type is verified as an object (non-null)
    }
  } catch (error) {
    // console.error("Failed to parse JSON:", error);
  }
  return null; // Return null if parsing fails or type is incorrect
}
// Example usage:
console.log("---Task 5 Using the unknown Type in TypeScript");
const correctJson = '{"name":"John", "age":30}';
console.log(safelyParseJson(correctJson)); // OutpTask 4 Using the any Type in TypeScriptut: { name: 'John', age: 30 }
const incorrectJson = "this is not a json";
console.log(safelyParseJson(incorrectJson)); // Output: null

//Task 6 Understanding Enums in TypeScript
enum VehicleType {
  Car = "Car",
  Truck = "Truck",
  Motorcycle = "Motorcycle",
}
function getVehicleType(vehicle: VehicleType): string {
  return `The vehicle type is: ${vehicle}.`;
}
// Example usage:
console.log("----Task 6 Understanding Enums in TypeScript"); // Output: "The vehicle type is: Car."
console.log(getVehicleType(VehicleType.Car)); // Output: "The vehicle type is: Car."
console.log(getVehicleType(VehicleType.Motorcycle)); // Output: "The vehicle type is: Motorcycle."

//Task 7 Exploring Union Types in TypeScript
function formatInput(input: string | number): string {
  if (typeof input === "number") {
    return input.toFixed(2); // Formats the number to two decimal places
  } else {
    return input.toUpperCase(); // Converts the string to uppercase
  }
}
// Example usage:
console.log("----Task 7 Exploring Union Types in TypeScript"); // Output: "HELLO"
console.log(formatInput("hello")); // Output: "HELLO"
console.log(formatInput(123.456)); // Output: "123.46"

//Task 8: Literal Types in TypeScript
function configureServer(
  environment: "development" | "staging" | "production"
): void {
  console.log(`Configuring server for the ${environment} environment.`);
}
// Example usage:
console.log("----Task 8: Literal Types in TypeScript"); // Output: "Configuring server for the production environment."
configureServer("production"); // Output: "Configuring server for the production environment."
configureServer("development"); // Output: " Configuring server for the development environment."
// configureServer("vasia"); // Output: " Configuring server for the vasia environment.

// Task 9: Return Types in TypeScript
function getUserId(username: string): number {
  // Dummy implementation: return the length of the username as the ID
  return username.length;
}
// Example usage:
console.log("----Task 9: Return Types in TypeScript"); // Output: 5
console.log('getUserId("alice")', getUserId("alice")); // Output: 5
// console.log(getUserId([1, 2, 23, 4, 5, 6])); // Output: 6

// Task 10 Void Types in TypeScript
function logMessage(message: string): void {
  console.log(message);
}
// Example usage:
logMessage("----Task 10 Void Types in TypeScript"); // Output: "Hello, TypeScript!"
logMessage("Hello, TypeScript!"); // Output: "Hello, TypeScript!"
logMessage(["Hello", ", ", "TypeScript", "!"].join("")); // Output: "Hello, TypeScript!"

// Task 11 Never Type in TypeScript
function errorHandler(message: string): never {
  throw new Error(message);
}
// Example usage:
// errorHandler("Critical error occurred!"); // Throws an Error with the provided message

// Task 12 Optional Parameters in an Interface
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string; // Optional property
}
function displayProduct(product: Product): void {
  console.log(`----Task 12 Optional Parameters in an I`);
  console.log(`Product ID: ${product.id}`);
  console.log(`Name: ${product.name}`);
  console.log(`Price: $${product.price.toFixed(2)}`);
  if (product.description) {
    console.log(`Description: ${product.description}`);
  } else {
    console.log("No description available.");
  }
}
// Example usage:
const apple = { id: 1, name: "Apple", price: 0.75 };
displayProduct(apple);

// Task 13 Method in an Interface
interface Calculator {
  add(x: number, y: number): number;
}
class SimpleCalculator implements Calculator {
  add(x: number, y: number): number {
    return x + y;
  }
}
// Example usage:
const myCalculator = new SimpleCalculator();
console.log("-----Task 13 Method in an Interface"); // Output: 8
console.log(myCalculator.add(5, 3)); // Output: 8

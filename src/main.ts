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

console.log(formatOrder(order1)); // Output: "Order 101: John Doe - Pending"

// Create a TypeScript function named displayUserProfile that takes a user
// profile object as an argument.The user profile object should have the following
// properties: username(string), age(number), and isActive(boolean).The function
//  should return a string summarizing the user's profile details.

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

console.log(displayUserProfile(userProfile)); // Output: "alice123 is 28 years old and is currently active."

function calculateTotal(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

// Example usage:
const numbersArray: number[] = [10, 20, 30, 40];
console.log(calculateTotal(numbersArray)); // Output: 100

function logDetails(value: any): void {
  console.log(`Value: ${value}, Type of value: ${typeof value}`);
}
// Example usage:
logDetails("Hello, TypeScript!"); // Output: Value: Hello, TypeScript!, Type of value: string
logDetails(42); //  Value: 42, Type of value: number
logDetails(true); //  Value: true, Type of value: boolean
logDetails({}); // Value: [object Object], Type of value: object
logDetails(null); // Value: null, Type of value: object
logDetails(""); // Value: , Type of value: string
logDetails(1n); // Value: , Type of value: string
logDetails(undefined); // Value: undefined, Type of value: undefined

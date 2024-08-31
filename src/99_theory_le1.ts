// let isDone: boolean = false;

// console.log(isDone);

// const name: string = "Vseslav";
// const lastName: string = "Dmitrovich";
// const age: number = 123;
// const isHappy: boolean = true;
// const box: null = null;
// const status: undefined = undefined;
// export { name, lastName, age, isHappy, box, status };

/**
 *  Create a TypeScript function named displayUserProfiles that takes a user
 * profile object as an argument. The user profile object should have the
 * following properties: username(string), age(string) and isActive(boolean).
 * The function should return a string summarizing the user`s profile details.
 */

// type UserProfile = {
//   userName: string;
//   age: number;
//   isActive: boolean;
// };

// const user: UserProfile = {
//   userName: "Bob",
//   age: 19,
//   isActive: true,
// };

// function displayUserProfile(user: UserProfile) {
//   return `User name is -${user.userName}. User is -${user.age} years old. Status isActive -${user.isActive} `;
// }

// console.log(displayUserProfile(user));

// function logName(name: string) {
//   console.log(name);
// }

// logName("Vera");

/**
 * start Array of number
 * get sum els
 */

// const arr = [10, 20, 30, 40, 50];

// function calcTotal(arr: number[]) {
//   return arr.reduce((acc, cur) => acc + cur, 0);
// }
// console.log(calcTotal(arr));

// type User = {
//   name: string;
//   age: number;
// };

// const users = [
//   { name: "Vera", age: 21 },
//   { name: "Gerasim", age: 22 },
//   { name: "Mumu", age: 23 },
// ];

// function calcTotalObj(arr: User[]) {
//   return arr.reduce((acc, cur) => acc + cur.age, 0);
// }

// console.log(calcTotalObj(users));
//++++++++++++++++++++++: unknown

// function safeParseJson(jsonString: string): unknown {
//   try {
//     const result: unknown = JSON.parse(jsonString);
//     if (typeof result === "object" && result !== null) {
//       return result;
//     }
//   } catch (error) {
//     console.error("Filled  to parse JSON", error);
//   }
//   return null;
// }
// export default safeParseJson;

//++++++++++++++++++++++: any

// function logDatails(value: any): void {
//   console.log(`value: ++${value}++. Type of value ++${typeof value}++`);
// }
// const sym1 = Symbol("foo");
// console.log("sym1", sym1, "typeof", typeof sym1);

// logDatails(sym1.toString());
// logDatails("false");
// logDatails(1n);
// logDatails(1);
// logDatails(false);
// logDatails(null);
// logDatails(undefined);
// logDatails(() => {
//   return "";
// });
// logDatails([1, 2, 3, 4]);
// logDatails({ ket: 123 });

//++++++++++++++++++++++: enum

// enum VehicleType {
//   Car = "Car",
//   Truck = "Truck",
//   Motorcycle = "Motorcycle",
//   Ducati = "Ducati",
// }

// function getVehicleType(vehicle: VehicleType): string {
//   return `The vehicle type is ${vehicle}.`;
// }
// console.log(getVehicleType(VehicleType.Car));
// console.log(getVehicleType(VehicleType.Truck));
// console.log(getVehicleType(VehicleType.Motorcycle));
// console.log(getVehicleType(VehicleType.Ducati));

//++++++++++++++++++++++: Union Types

// function formatInput(input: string | number | null) {
//   if (typeof input === "number") {
//     return input.toFixed(2);
//   } else if (typeof input === "string") {
//     return input.toUpperCase();
//   } else if (input === null) {
//     return null;
//   }
// }

// console.log(formatInput("input"));
// console.log(formatInput(2.3455));
// console.log(formatInput(null));

//++++++++++++++++++++++: Literal

// function lightShower(color: "green" | "red" | "yellow") {
//   switch (color) {
//     case "green":
//       console.log("Go=>");
//       break;
//     case "red":
//       console.log("Stop=X");
//       break;
//     case "yellow":
//       console.log("wait=!!!");
//       break;
//     default:
//       console.log("Color wrong. Change another color");
//       break;
//   }
// }

// console.log(lightShower("green"));
// console.log(lightShower("yellow"));
// console.log(lightShower("red"));

//================return: void :string
// function logName1(name: string): void {
//   console.log(name);
// }

// function logName2(name: string): string {
//   return `${name}`;
// }
// console.log(logName1("Nike"));
// console.log(logName2("Halk"));

//================return: never

// function errorHandler(message: string): never {
//   throw new Error(message);
// }
// errorHandler("critical");

//+++++++++++++++++++++++interface!!!!!!

// type User1 = {
//   name: string;
//   age: number;
// };

interface User {
  name: string;
  age: number;
  lastName?: string;
  sayHello(): string;
  sayBye(): void;
  shoeAge(age: number): string;
}

const user: User = {
  name: "Bob",
  age: 18,
  sayHello() {
    return `Hello ${this.name}`;
  },
  sayBye() {
    console.log(`Bye ${this.name}`);
  },
  shoeAge(age: number) {
    return `My age${age}`;
  },
};

console.log(user.sayHello());
console.log(user.sayBye());
console.log(user.shoeAge(123));

const student: User = {
  name: "Svtlana",
  age: 18,
  sayHello() {
    return `Hello ${this.name}`;
  },
  sayBye() {
    console.log(`Bye ${this.name}`);
  },
  shoeAge(age: number) {
    return `My age${age}`;
  },
};

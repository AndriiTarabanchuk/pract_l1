import React from "react";
// let name: string = "John";
// let arr: number[] = [1, 2, 3, 4];
// let id: string | number;

// function calcDist(): number {
//   return 42;
// }

// function LogMess(mess: string): void {
//   console.log(mess);
// }

// enum UserRole {
//   Admin = "Admin",
//   User = "User",
//   Guest = "Guest",
// }
//=============== question
// type Fish = {
//   fins: 2;
//   swim: () => void;
// };

// type Dog = {
//   legs: 4;
//   bark: () => void;
// };

// let pet: Dog | Fish;

// function isDog(pet: Dog | Fish): pet is Dog {
//   return "bark" in pet;
// }

// if (isDog(pet)) {
//   pet.bark();
// } else {
//   pet.swim();
// }

//+++++++++++++++index properties

// let name: string = "Bob";

// interface List {
//   [key: string]: number | null;
// }

// const fruits: List = {
//   apples: 10,
//   banana: 20,
//   oranges: 30,
//   pineapple: 22,
//   peach: null,
// };

// type Frits = {
//   apples: number;
//   banana: number;
//   oranges: number;
// };

// const electric = {
//   phones: 11,
//   tablets: 22,
//   monitors: 33,
// };

//++++++++++++++ Generic
// const numberArray = [10, 20, 30];
// const stringArray = ["hello", "world", "typescript"];
// const objectArray = [{ name: "Alice" }, { name: "Bob" }, { name: "Andrii" }];

// function getFirstElement(array: number[]) {
//   //!!!!!!wrong
//   return array[0];
// }

// console.log(getFirstElement(numberArray));
// console.log(getFirstElement(stringArray));
// console.log(getFirstElement(objectArray));

// function getFirstElement1<T>(array: T[]): T | undefined {
//   return array[0];
// }
// //getFirstElement1(number[]):number
// console.log(getFirstElement1(numberArray));
// //getFirstElement1(string[]):string
// console.log(getFirstElement1(stringArray));
// //getFirstElement1({ name: string}[]):{ name: string}
// console.log(getFirstElement1(objectArray));
// console.log(getFirstElement1([]));

// console.log(getFirstElement1(123));
// console.log(getFirstElement1("123"));
// console.log(getFirstElement1(false));

// const person = {
//   name: "John",
//   age: 30,
//   occupation: "Engineer",
//   gender: "male",
// };

// // person[key];

// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// const name = getProperty(person, "name");
// const age = getProperty(person, "age");
// const gender = getProperty(person, "gender");

// console.log("name-", name);
// console.log("age-", age);
// console.log("gender-", gender);

//===================and part 1-22-44     Partial<T>
// interface UserProfile {
//   username: string;
//   email: string;
//   age: number;
// }

// const originalProfile: UserProfile = {
//   username: "jonDoe",
//   email: "john@john.john",
//   age: 28,
// };

// function updateProfile(profile: UserProfile, updates: Partial<UserProfile>) {
//   return { ...profile, ...updates };
// }

// const updatedProfile = updateProfile(originalProfile, {
//   email: "johnDoe@john.john",
//   age: 29,
// });

// console.log(updatedProfile);

// ++++++++++++++++++++++++++++++ Readonly<T>

// interface User {
//   id: number;
//   name: string;
// }

// const user: Readonly<User> = {
//   id: 100,
//   name: "Bob",
// };

// user.id = 201;
// user.name = "dgdfgd";

// console.log(user);

//+++++++++++++++++++++++++++++++++ Pick<T>

// interface BasicInfo {
//   name: string;
//   email: string;
// }
// interface Employee {
//   id: number;
//   name: string;
//   email: string;
//   department: string;
//   hireDate: Date;
// }

// const fullEmployeeInfo: Employee = {
//   id: 101,
//   name: "John Doe",
//   email: "johnDoe@john.john",
//   department: "Engineering",
//   hireDate: new Date("2020-01-10"),
// };

// // {
// //   name: string;
// //   email: string;
// // }
// function displayInfo(
//   fullEmployeeInfo: Employee
// ): Pick<Employee, "name" | "email"> {
//   return {
//     name: fullEmployeeInfo.name,
//     email: fullEmployeeInfo.email,
//   };
// }
// console.log(displayInfo(fullEmployeeInfo));

// function displayInfo1(fullEmployeeInfo: Employee): BasicInfo {
//   return {
//     name: fullEmployeeInfo.name,
//     email: fullEmployeeInfo.email,
//   };
// }
// console.log(displayInfo1(fullEmployeeInfo));

//=============================Omit<T, K extend>

// interface Employee {
//   id: number;
//   name: string;
//   email: string;
//   department: string;
//   hireDate: Date;
// }

// const fullEmployeeInfo: Employee = {
//   id: 101,
//   name: "John Doe",
//   email: "johnDoe@john.john",
//   department: "Engineering",
//   hireDate: new Date("2020-01-10"),
// };

// function displayInfo2(fullEmployeeInfo: Employee): Omit<Employee, "hireDate"> {
//   return {
//     id: fullEmployeeInfo.id,
//     name: fullEmployeeInfo.name,
//     email: fullEmployeeInfo.email,
//     department: fullEmployeeInfo.department,
//   };
// }

// console.log(displayInfo2(fullEmployeeInfo));

//=============================Record<T, K extend>
// interface List {
//   [key: string]: number | null;
// }

// function recordTemperatures(temps: number[]): Record<string, number> {
//   let temperatureRecord: Record<string, number> = {};

//   temps.forEach((temp, index) => {
//     temperatureRecord[`day${index + 1}`] = temp;
//   });
//   return temperatureRecord;
// }

// const weeklytemps = [22, 24, 23, 25, 24, 26, 27];

// const tempRecord = recordTemperatures(weeklytemps);
// console.log(tempRecord);

// const keys = Object.keys(tempRecord);
// for (let key of keys) {
//   console.log(tempRecord[key]);
// }

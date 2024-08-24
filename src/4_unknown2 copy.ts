function fetchUserData() {
  return "Tom";
}

let userData: unknown = fetchUserData(); // fetchUserData повертає невідомі дані
if (typeof userData === "string") {
  console.log(userData.toUpperCase()); // OK, тепер ми знаємо, що це рядок
}

// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }
// const auto = new Car('Honda', 'Accord', 1998);

// console.log(auto instanceof Car);
// // Expected output: true

// console.log(auto instanceof Object);
// // Expected output: true

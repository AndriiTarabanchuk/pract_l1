interface IPerson {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let user: IPerson;

user = {
  name: "Anthony",
  age: 21,
  greet(phrase) {
    console.log(phrase + " " + this.name);
  },
};

user.greet("Вітання всім, я"); // Вітання всім, я Anthony

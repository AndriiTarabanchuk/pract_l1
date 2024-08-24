interface IPerson {
  name: string;
  age: number;
  greet(phrase: string): void;
}
interface IPilot extends IPerson {
  flyMessage(): void;
}

const pilot: IPilot = {
  name: "Vasia",
  age: 19,
  greet(phrase) {
    console.log(phrase + " " + this.name);
  },
  flyMessage: function () {
    console.log("Good hunter to the whale.");
  },
};

console.log(pilot.greet(`I am a greate pilot my name is`));
// "Good hunter to the whale."
// `${this.name} is pilot.(S)he is a ${this.age}`;

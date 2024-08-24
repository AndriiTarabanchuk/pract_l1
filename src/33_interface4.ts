interface Animal {
  name: string;
}

interface Dog extends Animal {
  bark: string;
}

class MyDog implements Dog {
  name = "Fido";
  bark = "Woof!";
}

// Error: Property 'name' is missing in type 'OtherDog'
class OtherDog implements Dog {
  bark = "Woof!";
}
console.log("MyDog", MyDog);
console.log("OtherDog", OtherDog);
export {};

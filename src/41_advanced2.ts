const input = document.getElementById("app");

// input.value = "test@test.ts";

console.log(input);

const input2 = <HTMLInputElement>document.getElementById("app1");

input2.textContent = "test1@test.ts";

console.log(input2);

const input3 = document.getElementById("app2") as HTMLInputElement;

input3.innerHTML = "test2@test.ts";

console.log(input3);

const input4 = document.getElementById("app4");

if (input4) {
  (input4 as HTMLInputElement).value = "test4@test.ts";
}

export {};

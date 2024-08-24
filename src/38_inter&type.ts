type AddFunc = (n1: number, n2: number) => number;

let add: AddFunc;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
console.log(add(10, 23));

interface AddFunc1 {
  (n1: number, n2: number): number;
}

let add1: AddFunc1;

add1 = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(add1(93, 23));

type Length = {
  length: number;
};

function getLength<T extends Length>(str: T) {
  return str.length;
}

getLength("text");
getLength([1, 2, 3]);
getLength(100); // Errro: Argument of type 'number' is not assignable to parameter of type 'ILength'
console.log(getLength("text"));
console.log(getLength([1, 2, 3]));
console.log(getLength(100));
export {};

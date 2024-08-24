function merge(objA: object, objB: object) {
  return Object.assign(objA, objB);
}

const merged = merge({ name: "Alisa" }, { age: 28 });

// merged.name;

console.log(merged.name);

const merged1 = merge({ name: "Alisa" }, { age: 28 }) as {
  name: string;
  age: number;
};
console.log(merged1.age);

export {};

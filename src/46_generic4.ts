class KeyValuePair<TKey, TValue> {
  constructor(private key: TKey, private value: TValue) {}

  getKey(): TKey {
    return this.key;
  }

  getValue(): TValue {
    return this.value;
  }
}

const pair1 = new KeyValuePair("name", "Alice");
console.log(pair1.getKey()); // 'name'
console.log(pair1.getValue()); // 'Alice'

const pair2 = new KeyValuePair(1, true);
console.log(pair2.getKey()); // 1
console.log(typeof pair2.getKey()); // 1

console.log(pair2.getValue()); // true
console.log(typeof pair2.getValue()); // 1

export {};

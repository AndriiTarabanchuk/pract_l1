// Визначення типу функції, який приймає два числа та повертає число
type CallbackType = (num1: number, num2: number) => number;

// Функція, яка приймає два числа та функцію зворотного виклику, застосовує цю функцію до чисел та виводить результат
function calc(param1: number, param2: number, callback: CallbackType): void {
  console.log("Result:", callback(param1, param2));
}

// Приклади використання calc з різними функціями зворотного виклику
calc(1, 1, (num1, num2) => num1 + num2);
calc(10, 5, (num1, num2) => num1 - num2);

type CallbackType1 = (...nums: number[]) => number;

function calc1(param1: number, param2: number, callback: CallbackType1): void {
  console.log("Result:", callback(param1, param2));
}

calc1(19, 19, (num1, num2) => num1 + num2);
calc1(11, 15, (num1, num2) => num1 - num2);
export {};

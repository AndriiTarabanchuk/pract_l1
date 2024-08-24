type Callback = (...args: unknown[]) => unknown;

function createLoggedFunction<T extends Callback>(func: T) {
  let funcRef = func;

  const loggedFunction = (...args: Parameters<T>) => {
    console.log(`Function ${func.name} was called with arguments:`, args);
    const result = funcRef(...args) as ReturnType<T>;
    return result;
  };

  return loggedFunction;
}
console.log(createLoggedFunction());
export {};

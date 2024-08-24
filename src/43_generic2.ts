console.log("1234");

const promise: Promise<string> = new Promise((resolve) => {
  setInterval(() => {
    resolve("Done!");
  }, 1000);
});

promise.then((data) => {
  console.log(data);
});

export {};

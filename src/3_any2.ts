function fetchUserData(id: string, callback: (data: any) => void): void {
  // Тут може бути якийсь запит, але ми його заповнимо самі
  const responseData = { name: false };

  callback(responseData);
}

// Використання функції:
fetchUserData("123", (data) => {
  console.log(data.name); // TypeScript не викличе помилку, навіть якщо поле name не існує
});

export {};

type User = {
  id: number;
  name: string;
  email: string;
  registered: boolean;
};

function createUser(data: Partial<User>): User {
  // Деякі значення за замовчуванням:
  const defaultUser: User = {
    id: Date.now(),
    name: "",
    email: "",
    registered: false,
  };

  // З'єднуємо дані користувача та значення за замовчуванням
  return { ...defaultUser, ...data };
}

const newUser = createUser({ name: "Alice", email: "alice@example.com" });
console.log(newUser);

const newUser2 = createUser({ name: "Vasox", email: "xcvsde@example.com" });
console.log(newUser2);
export {};

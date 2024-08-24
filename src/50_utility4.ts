type User = {
  id: number;
  name: string;
  email: string;
};

type UserBasicInfo = Pick<User, "id" | "name">;

let userBasicInfo: UserBasicInfo = {
  id: 1,
  name: "John Doe",
  email: "john@example.com", // Error: Property 'email' does not exist on type 'UserBasicInfo'
};

export {};

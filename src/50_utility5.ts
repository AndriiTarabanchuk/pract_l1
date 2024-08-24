type BaseEmployee = {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  department: string;
  startDate: Date;
  // ...і багато інших полів
};

type BaseProject = {
  id: number;
  name: string;
  budget: number;
  deadline: Date;
  // ...і багато інших полів
};

type Assignment = {
  employee: Pick<BaseEmployee, "id" | "firstName" | "lastName">;
  projects: Pick<BaseProject, "id" | "name" | "deadline">[];
  shouldNotifyEmployee?: boolean;
};

export {};

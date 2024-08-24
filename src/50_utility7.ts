enum UserRoles {
  admin = "admin",
  manager = "manager",
  employee = "manager",
}

type UserRolesStatuses = Record<UserRoles, boolean>;

const userRoleStatuses: UserRolesStatuses = {
  [UserRoles.admin]: true,
  [UserRoles.manager]: false,
  [UserRoles.employee]: true,
};

export {};

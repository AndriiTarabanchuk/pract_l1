enum Role {
  ADMIN,
  USER,
  USER1,
}

const person = {
  role: Role.USER1,
};
console.log(Role.USER1);
console.log(Role[Role.USER1]);

switch (person.role) {
  case Role.ADMIN:
    console.log("Role: ", Role.ADMIN);
    break;
  case Role.USER:
    console.log("Role: ", Role.USER);
    break;
  case Role.USER1:
    console.log("Role: ", Role.USER1);
    break;
  default:
    break;
}
// console.log(Role);
// if (person.role === Role.ADMIN) {
//   console.log("Role: ", Role.ADMIN);
// }
// if (person.role === Role.USER) {
//   console.log("Role: ", Role.USER);
// }

// if (person.role === Role.ADMIN) {
//   console.log("Role: ", Role.ADMIN);
// }
// export {};
// var Role;
// (function (Role) {
//   Role[(Role["ADMIN"] = 0)] = "ADMIN";
//   Role[(Role["USER"] = 1)] = "USER";
// })(Role || (Role = {}));
// var person = {
//   role: Role.ADMIN,
// };
// if (person.role === Role.ADMIN) {
//   console.log("Role: ", Role.ADMIN);
// }

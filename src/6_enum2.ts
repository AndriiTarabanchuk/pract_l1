enum UserStatus {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Banned = "BANNED",
}
let status: UserStatus = UserStatus.Active;

console.log(status);
console.log("UserStatus", UserStatus);

enum HttpCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
}

function respond(status: HttpCodes) {
  // handle response
  return status;
}

console.log(respond(HttpCodes.Unauthorized));

export {};

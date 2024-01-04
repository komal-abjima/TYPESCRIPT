"use strict";
var adminUser;
(function (adminUser) {
    adminUser[adminUser["admin"] = 0] = "admin";
    adminUser[adminUser["user"] = 1] = "user";
})(adminUser || (adminUser = {}));
//const user:adminUser = adminUser.admin;
const isAdmin = (user) => {
    return user === adminUser.admin ? `You can edit the website` : `You can not edit the website`;
};
console.log(isAdmin(adminUser.admin));

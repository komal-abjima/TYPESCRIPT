/*it is commonly used when you want to represent a set of related values and choose one value for multiple options.Enums provide a
convenient way to define a set of named values and associate them with specific meanings.
In TS, when enum constants are not explicitly assigned numeric values, they are automatically assigned incremental numeric values
starting from 0. the default numeric value for the first enum constant is 0, and subsequent enum constatnts receive values incremented by 1*/
var Roles;
(function (Roles) {
    Roles[Roles["user"] = 0] = "user";
    Roles[Roles["admin"] = 1] = "admin";
})(Roles || (Roles = {}));
var user1 = {
    email: "Ks@mail.com",
    password: "1212",
    role: Roles.admin
};
var user2 = {
    email: "KK@mail.com",
    password: "2222",
    role: Roles.user
};
// const isAdmin = (user: User) =>{
//     const {name, email, role} = user1;
//     return role === 'admin' ? `${email} is allow to edit the website ` : `${email} is not allow to edit the website`;
// }
// console.log(isAdmin(user1));

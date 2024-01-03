/*it is commonly used when you want to represent a set of related values and choose one value for multiple options.Enums provide a 
convenient way to define a set of named values and associate them with specific meanings. 
In TS, when enum constants are not explicitly assigned numeric values, they are automatically assigned incremental numeric values
starting from 0. the default numeric value for the first enum constant is 0, and subsequent enum constatnts receive values incremented by 1*/
enum Roles{
    user,
    admin
}
type User = {
    name?:string;
    email: string;
    password: string;
    role: Roles;
}

const user1:User = {
    email: "Ks@mail.com",
    password: "1212",
    role: Roles.admin
}
const user2:User = {
    email: "KK@mail.com",
    password: "2222",
    role: Roles.user
}

// const isAdmin = (user: User) =>{
//     const {name, email, role} = user1;
//     return role === 'admin' ? `${email} is allow to edit the website ` : `${email} is not allow to edit the website`;

// }
// console.log(isAdmin(user1));
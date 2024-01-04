enum adminUser {
    admin,
    user
}
//const user:adminUser = adminUser.admin;

const isAdmin = (user:adminUser) =>{
   
   return user === adminUser.admin ? `You can edit the website` : `You can not edit the website`;

}
console.log(isAdmin(adminUser.admin));







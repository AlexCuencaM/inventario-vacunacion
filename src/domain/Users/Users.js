export default class User{
    constructor(newUser){
        this.Id = newUser.Id;
        this.RoleId = newUser.RoleId;
        this.UserName = newUser.UserName;
        this.Password = newUser.Password;
    }
}
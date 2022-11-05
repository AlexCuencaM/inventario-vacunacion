import User from "./Users";
export default class UserAdapter{
    create(object){
        return new User(object);
    }
    createFromDB(object){
        const preparedUserFromDB ={
            Id: object.id,
            RoleId: object.roleId,
            UserName: object.username,
            Password: object.password
        }
        return new User(preparedUserFromDB)
    }
}


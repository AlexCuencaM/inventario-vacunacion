export default class Employee{
    constructor(object){
        this.Id = object.Id;
        this.UserId = object.UserId;
        this.Cedula = object.Cedula;
        this.Names = object.Names;
        this.Lastnames = object.Lastnames;
        this.Email = object.Email;
        this.BirthDate = object.BirthDate;
        this.Address = object.Address;
        this.Phone = object.Phone;
    }
}
export class EmployeeApi{
    constructor(object){
        this.id = object.id
        this.userId = object.userId
        this.cedula = object.cedula
        this.names = object.names
        this.lastnames = object.lastnames
        this.email = object.email
        this.birthDate = object.birthDate
        this.address = object.address
        this.cellphone = object.cellphone
    }
}
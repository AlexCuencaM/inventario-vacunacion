import Employee, { EmployeeApi } from "./Employee";

export default class EmployeeAdapter{
    create(object){
        return new Employee(object);
    }
    createFromDB(object){
        const preparedDataFromDB ={
            Id: object.id,
            UserId: object.userId,
            Cedula: object.cedula,
            Names: object.names,
            Lastnames: object.lastnames,
            Email: object.email,
            BirthDate: object.birthDate,
            Address: object.address,
            Phone: object.cellphone
        }
        return new Employee(preparedDataFromDB)
    }
    createToDB(object){
        const preparedDataToDB ={
            id: object.Id,
            userId: object.UserId,
            cedula: object.Cedula,
            names: object.Names,
            lastnames: object.Lastnames,
            email: object.Email,
            birthDate: object.BirthDate,
            address: object.Address,
            cellphone: object.Phone,
        }
        return new EmployeeApi(preparedDataToDB)
    }
}

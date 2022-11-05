import EmployeeAdapter from "../../domain/Employees/EmployeeAdapter";
import { employesType } from "../actions/types";
export function employesReducer(state, { type, payload }) {
    let adapter = new EmployeeAdapter();
    switch (type) {
        case employesType.delete: {
            return {
                ...state,
                employes: state.employes.filter(employed => employed.Id != payload)
            }
        }
        case employesType.patchSaved:{
            const employee = adapter.createFromDB(payload)
            return {
                ...state,
                employes: state.employes.map(employed => employed.Id === employee.Id 
                    ? employee : employed)
            }
        } 
        case employesType.select: {
            return {
                ...state,
                actualEmployed: adapter.createFromDB(payload)
            };
        }
        case employesType.selectAll: {
            return {
                ...state,
                employes: payload.map(employeeDB => adapter.createFromDB(employeeDB) )
            };
        }
        case employesType.typeVaccine:
        case employesType.employedVaccinated: {
            return {
                ...state,
                employes: payload.map(employedVaccined => adapter.createFromDB(employedVaccined.employes))
            };
        }
        default:
            return state
    }
}

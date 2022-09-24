import { employesType } from "./types";

export const employedDeleted = (id) => ({
    type: employesType.delete,
    payload: id
});
export const getEmployed = (employed) =>({
    type: employesType.select,
    payload: employed
})
export const getAllEmployes = (employes) => ({
    type: employesType.selectAll,
    payload: employes
})
export const getEmployesByStateVaccine = (employesVaccines) => ({
    type: employesType.employedVaccinated,
    payload: employesVaccines
})
export const getEmployesByTypeVaccine = (employesVaccines) => ({
    type: employesType.typeVaccine,
    payload: employesVaccines
})
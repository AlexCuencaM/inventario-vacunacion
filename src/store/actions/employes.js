import { employesType } from "./types";

export const employedDeleted = (id) => ({
    type: employesType.delete,
    payload: id
});
export const getAllEmployes = (employes) => ({
    type: employesType.selectAll,
    payload: employes
})
export const getEmployesByStateVaccine = (employesVaccines) => ({
    type: employesType.employedVaccinated,
    payload: employesVaccines
})
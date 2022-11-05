import { employesType } from "./types";

export const employedDeleted = (id) => ({
    type: employesType.delete,
    payload: id
});

export const employedPatchedSaved = (employed) => ({
    type: employesType.patchSaved,
    payload: employed
});

export const getEmployed = (actualEmployed) =>({
    type: employesType.select,
    payload: actualEmployed
})
export const getEmployedDefault = () =>({
    type: employesType.selectDefault,
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
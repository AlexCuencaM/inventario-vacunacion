import { employesType } from "../actions/types";
export function employesReducer(state, { type, payload }) {
    switch (type) {
        case employesType.delete: {
            return {
                ...state,
                employes: state.employes.filter(employed => employed.id != payload)
            }
        }
        case employesType.patchSaved:{
            return {
                ...state,
                employes: state.employes.map(employed => employed.id === payload.id 
                    ? payload : employed)
            }
        } 
        case employesType.select: {
            return {
                ...state,
                actualEmployed: payload
            };
        }
        case employesType.selectAll: {
            return {
                ...state,
                employes: payload
            };
        }
        case employesType.typeVaccine:
        case employesType.employedVaccinated: {
            return {
                ...state,
                employes: payload.map(employedVaccined => employedVaccined.employes)
            };
        }
        default:
            return state
    }
}

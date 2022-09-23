import { employesType } from "../actions/types";
export function employesReducer(state, { type, payload }) {
    switch (type) {
        case employesType.delete: {
            return {
                ...state,
                employes: state.employes.filter(employed => employed !== payload)
            }
        }
        case employesType.selectAll: {
            return {
                ...state,
                employes: payload
            };
        }
        default:
            return state
    }
}

import { employesType } from "../actions/types";
export function employesReducer(state, { type, payload }) {
    switch (type) {
        case employesType.delete: {
            return {
                isLogged: true,
                employed: payload
            };
        }
        default:
            return state
    }
}

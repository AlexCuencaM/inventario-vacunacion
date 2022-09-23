import { employesType } from "../actions/types";
export function employesReducer(state, { type, payload }) {
    switch (type) {
        case employesType.loggedIn: {
            return {
                isLogged: true,
                employed: payload
            };
        }
        default:
            return state
    }
}

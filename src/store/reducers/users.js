import { usersType } from "../actions/types";

export function usersReducer(state, { type, payload }){
    switch(type){
        case usersType.register:{
            return {
                payload
            }
        }
    }
}
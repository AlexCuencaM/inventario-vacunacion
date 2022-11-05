import { usersType } from "./types"

export const userCreated = (user) => ({
    type: usersType.register,
    payload: user
});
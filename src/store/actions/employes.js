import { employesType } from "./types";

export const employedDeleted = (employed) => ({
    type: employesType.delete,
    payload: employed
});

import { Grid } from "@mui/material"
import { useEffect } from "react";
import { apiInstance } from "../../settings/apiInstance";
import { getAllEmployes } from "../../store/actions/employes";
import { useStore, useStoreDispatch } from "../../store/store"
import EmployedCard from "./EmployedCard"
export const EmployeesList = () =>{
    const { state } = useStore();
    const { employesDispatch } = useStoreDispatch();
    useEffect(() => {
        apiInstance.get("/employes")
        .then(({ data }) =>{
            employesDispatch(getAllEmployes(data))
        })
    }, [state])
    return(
        state.employes.map(employed => <Grid item xs={12} sm={6} md={4} key={employed.id}>
            <EmployedCard employed={employed}/>
            </Grid>)
    )
}
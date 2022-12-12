import { Grid } from "@mui/material"
import { useStore } from "../../../store/store"
import EmployedCard from "./EmployedCard"
export const EmployeesList = () =>{
    const { state } = useStore();
    return(
        state.employes.map(employed => <Grid item xs={12} sm={6} md={4} key={employed.Id}>
                <EmployedCard employed={employed}/>
            </Grid>)
    )
}
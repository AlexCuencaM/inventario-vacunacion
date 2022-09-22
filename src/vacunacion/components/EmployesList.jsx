import { Grid, Typography } from "@mui/material"
import EmployedCard from "./EmployedCard"
export const EmployeesList = (props) =>{
    return(
        props.employees.map(employed => <Grid item xs={12} sm={6} md={4}>
            <EmployedCard employed={employed}/>
            </Grid>)
    )
}
import { Grid, Typography } from "@mui/material"
import { useEffect } from "react"
import { apiInstance } from "../../settings/apiInstance"
import { getAllEmployes } from "../../store/actions/employes"
import { useStoreDispatch } from "../../store/store"
import Navbar from "../../ui/Navbar"
import { StateFilter } from "../components/Filters/StateFilter"
import { EmployeesList } from "../components/Employes/EmployesList"
import { TypeVaccineFilter } from "../components/Filters/TypeVaccineFilter"
import { EditFormDialog } from "../../ui/EditFormDialog"
import { ConfirmDialog } from "../../ui/ConfirmDialog"

const user = {
    id: 1,
    roleId: 1,
    username: "Admin",
    password: null
}

export const EmployesView = () => {
    const { employesDispatch } = useStoreDispatch();
    useEffect(() => {
        apiInstance.get("/employes")
        .then(({ data }) =>{
            employesDispatch(getAllEmployes(data))
        })
    }, [])
    
  return (
    <Navbar user={user}>
        <Grid container spacing={2}>
            <Grid item md={12} >
                <Typography variant="h2" component="h1" gutterBottom >
                    Inventario - Vacunación
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <StateFilter/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TypeVaccineFilter/>
            </Grid>
            <EmployeesList/>
        </Grid>
        <EditFormDialog />
        <ConfirmDialog/>
    </Navbar>
  )
}


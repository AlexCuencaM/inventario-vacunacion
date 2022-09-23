import { Grid, Typography } from "@mui/material"
import { useEffect } from "react"
import { apiInstance } from "./settings/apiInstance"
import { getAllEmployes } from "./store/actions/employes"
import { useStore, useStoreDispatch } from "./store/store"
import Navbar from "./ui/Navbar"
import { EmployeesList } from "./vacunacion/components/EmployesList"

const user = {
    id: 1,
    roleId: 1,
    username: "Admin",
    password: null
}

function App() {
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
                <Typography variant="h2" gutterBottom >
                    Inventario - Vacunación
                </Typography>
            </Grid>
            <EmployeesList/>
        </Grid>
    </Navbar>
  )
}

export default App

import { Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { apiInstance } from "./settings/apiInstance"
import Navbar from "./ui/Navbar"
import { EmployeesList } from "./vacunacion/components/EmployesList"
const user = {
    id: 1,
    roleId: 1,
    username: "Admin",
    password: null
}

function App() {
    const [employees, setEmployees] = useState([])
    useEffect(() => {
        apiInstance.get("/employes")
        .then(({ data }) =>{
            setEmployees(data)
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
            <EmployeesList employees={employees}/>
        </Grid>
    </Navbar>
  )
}

export default App

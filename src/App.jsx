import { Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import Navbar from "./ui/Navbar"
import { EmployeesList } from "./vacunacion/components/EmployesList"
const user = {
    id: 1,
    roleId: 1,
    username: "Admin",
    password: null
}
const url = "http://localhost:3000/employes"
// const employeesArray = [

//     {
//         "id":1,
//         "userId": 2,
//         "cedula": "0912345678",
//         "names": "Maximiliano Dante",
//         "lastnames" :"Cuenca morán",
//         "email": "max@mail.com",
//         "birthDate": null,
//         "address": "Street 123",
//         "cellphone": "0996008960"
//     },
//     {
//         "id":2,
//         "userId": 3,
//         "cedula": "0912345608",
//         "names": "Genesis Lisbeth",
//         "lastnames" :"Cunalata Amaguaya",
//         "email": "genesis@mail.com",
//         "birthDate": null,
//         "address": "Street 1234",
//         "cellphone": "0996008910"
//     },
//     {
//         "id":2,
//         "userId": 3,
//         "cedula": "0912345608",
//         "names": "Leo Daniel",
//         "lastnames" :"Cunalata Amaguaya",
//         "email": "leo@mail.com",
//         "birthDate": null,
//         "address": "Street 1234",
//         "cellphone": "0996008910"
//     },
//     {
//         "id":2,
//         "userId": 3,
//         "cedula": "0912345608",
//         "names": "Kelly Denisse",
//         "lastnames" :"Villalva Rodriguez",
//         "email": "kelly@mail.com",
//         "birthDate": null,
//         "address": "Street 1234",
//         "cellphone": "0996008910"
//     }

    
// ]
function App() {
    const [employees, setEmployees] = useState([])
    useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(setEmployees);
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

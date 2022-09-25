import { Typography } from '@mui/material'
import React from 'react'
import { NewEmployedForm } from '../components/Employes/NewEmployedForm'

export const NewEmployedView = () => {
  return (
    <div>
        <Typography variant="h2" component="h1" gutterBottom>Registrar nuevo empleado </Typography> 
        <NewEmployedForm/>
    </div>
  )
}

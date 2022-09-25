import { Button } from '@mui/material'
import React from 'react'
import { NavLink as RouterLink } from 'react-router-dom';
export const LoginView = () => {
  return (
    <div>
        LoginView
        <Button component={RouterLink} to="/admin/employes">Login</Button>
    </div>
    
  )
}

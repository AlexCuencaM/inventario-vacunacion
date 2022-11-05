import * as React from 'react';
import Button from '@mui/material/Button';
import { EmployedForm } from './EmployedForm';
import { employedFormInitialState, useStore, useStoreDispatch } from '../../../store/store';
import { employedPatchedSaved, getEmployed } from '../../../store/actions/employes';
import { apiInstance } from '../../../settings/apiInstance';
import { Grid } from '@mui/material';
import { schema } from '../../helpers/helpers';
import EmployeeAdapter from '../../../domain/Employees/EmployeeAdapter';
let adapter = new EmployeeAdapter();
export function NewEmployedForm() {
  const { employedForm } = useStore();
  const { employesDispatch, setEmployedForm } = useStoreDispatch();
  //It have to load before layout
  React.useLayoutEffect (() => {
    setEmployedForm(employedFormInitialState)
  }, [employedFormInitialState])
  
  const handleOk = () =>{
    const employedFormDB = adapter.createToDB(employedForm)
        schema.validate(employedForm)
        .then(valid => apiInstance.post(`/employes`, employedFormDB))
        .then((data) => {
            employesDispatch(getEmployed(employedFormDB))
            employesDispatch(employedPatchedSaved(employedFormDB))
            alert("Empleado registrado correctamente")
            setEmployedForm(employedFormInitialState)
        })
        .catch(err => {
            alert(err.message)
            employesDispatch(getEmployed(employedFormDB))
        })
  }
  return (
    <Grid container spacing={2}>
        <EmployedForm columns={2} variant="outlined"/>
        <Grid item md={2}>
            <Button variant="contained" color="primary" onClick={handleOk}>Registrar</Button>
        </Grid>
    </Grid>
    
  );
}
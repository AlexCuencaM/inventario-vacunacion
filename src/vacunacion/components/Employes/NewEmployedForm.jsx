import * as React from 'react';
import Button from '@mui/material/Button';
import { EmployedForm } from './EmployedForm';
import { employedFormInitialState, useStore, useStoreDispatch } from '../../../store/store';
import { employedPatchedSaved, getEmployed } from '../../../store/actions/employes';
import { apiInstance } from '../../../settings/apiInstance';
import { Grid } from '@mui/material';
import { schema } from '../../helpers/helpers';

export function NewEmployedForm() {
  const { state, employedForm } = useStore();
  const { actualEmployed } = state;
  const { employesDispatch, setEmployedForm } = useStoreDispatch();
  //It have to load before layout
  React.useLayoutEffect (() => {
    setEmployedForm(employedFormInitialState)
  }, [employedFormInitialState])
  
  const handleOk = () =>{
        schema.validate(employedForm)
        .then(valid => apiInstance.post(`/employes`, employedForm))
        .then((data) => {
            employesDispatch(getEmployed(employedForm))
            employesDispatch(employedPatchedSaved(employedForm))
            alert("Empleado registrado correctamente")
            setEmployedForm(employedFormInitialState)
        })
        .catch(err => {
            alert(err.message)
            employesDispatch(getEmployed(actualEmployed))
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
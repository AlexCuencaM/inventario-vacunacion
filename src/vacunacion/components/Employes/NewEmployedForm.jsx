import * as React from 'react';
// import * as yup from 'yup';
import Button from '@mui/material/Button';
import { EmployedForm } from './EmployedForm';
import { employedFormInitialState, useStore, useStoreDispatch } from '../../../store/store';
import { employedPatchedSaved, getEmployed } from '../../../store/actions/employes';
import { apiInstance } from '../../../settings/apiInstance';
import { Grid } from '@mui/material';
import { schema } from '../../helpers/helpers';
// yup.addMethod(yup.string, 'integerOnString', function () {
//     return this.matches(/^\d+$/, 'La cadena de caracteres solo debe tener números')
// })
// yup.addMethod(yup.string, 'onlyLetters', function () {
//     return this.matches(/^[A-Za-z]+((\s)?((\'|\-|\.)?([A-Za-z])+))*$/, 'La cadena de caracteres solo debe tener letras o espacios')
// })

// let schema = yup.object().shape({
//     names: yup.string().onlyLetters().required(),
//     cedula: yup.string().integerOnString().required().length(10, "La cédula debe contener 10 dígitos"),
//     lastnames: yup.string().onlyLetters().required(),
//     email: yup.string().email(),
//   });

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
    <Grid>
        <EmployedForm columns={2} variant="outlined"/>
        <Grid item md={2}>
            <Button variant="contained" color="primary" onClick={handleOk}>Registrar</Button>
        </Grid>
    </Grid>
    
  );
}
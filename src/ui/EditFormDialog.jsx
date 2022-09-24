import * as React from 'react';
import Button from '@mui/material/Button';
import * as yup from 'yup';
import { useStoreDispatch } from '../store/store';
import { apiInstance } from '../settings/apiInstance';
import { employedPatchedSaved, getEmployed } from '../store/actions/employes';
import { useStore } from '../store/store';
import { GeneralDialog } from './GeneralDialog';
import { EmployedForm } from '../vacunacion/components/Employes/EmployedForm';
yup.addMethod(yup.string, 'integerOnString', function () {
    return this.matches(/^\d+$/, 'La cadena de caracteres solo debe tener números')
})
yup.addMethod(yup.string, 'onlyLetters', function () {
    return this.matches(/^[A-Za-z]+((\s)?((\'|\-|\.)?([A-Za-z])+))*$/, 'La cadena de caracteres solo debe tener letras o espacios')
})

let schema = yup.object().shape({
    names: yup.string().onlyLetters().required(),
    cedula: yup.string().integerOnString().required().length(10, "La cédula debe contener 10 dígitos"),
    lastnames: yup.string().onlyLetters().required(),
    email: yup.string().email(),
  });

export function EditFormDialog() {
  const { ui, state, employedForm } = useStore();
  const { actualEmployed } = state;
  const { setOpenEditModal, employesDispatch } = useStoreDispatch();
  const handleOk = () =>{
        schema.validate(employedForm)
        .then(valid => apiInstance.patch(`/employes/${valid.id}`, employedForm))
        .then(() => {
            setOpenEditModal(false)
            employesDispatch(getEmployed(employedForm))
            employesDispatch(employedPatchedSaved(employedForm))
        })
        .catch(err => {
            alert(err.errors[0])
            employesDispatch(getEmployed(actualEmployed))
        })
  }
  const handleCancel = () => {
    setOpenEditModal(false)
  };
  return (
    <GeneralDialog open={ui.openEditModal} title="Editar empleado" Component={EmployedForm}>
        <Button autoFocus onClick={handleCancel}>
          Cancelar
        </Button>
        <Button color="primary" onClick={handleOk}>Modificar</Button>
    </GeneralDialog>
  );
}
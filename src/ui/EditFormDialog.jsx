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
yup.addMethod(yup.string, 'nonIntegerOnString', function () {
    return this.matches(/^[^0-9()]+$/, 'La cadena de caracteres solo debe tener letras o espacios')
})

let schema = yup.object().shape({
    names: yup.string().nonIntegerOnString().required(),
    cedula: yup.string().integerOnString().required().length(10, "La cédula debe contener 10 dígitos"),
    lastnames: yup.string().nonIntegerOnString().required(),
    email: yup.string().email(),
  });

export function EditFormDialog() {
  const { ui, state, employedForm } = useStore();
//   const { actualEmployed } = state;
  const { setOpenEditModal, employesDispatch } = useStoreDispatch();
  const handleOk = () =>{
        schema.validate(employedForm)
        .then(valid => apiInstance.patch(`/employes/${valid.id}`, employedForm))
        .catch(err => {
            alert(err.name)
            console.log(err.errors)
        })
        .then(() => {
            setOpenEditModal(false)
            employesDispatch(getEmployed(employedForm))
            employesDispatch(employedPatchedSaved(employedForm))
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
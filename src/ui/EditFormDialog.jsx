import * as React from 'react';
import Button from '@mui/material/Button';
import { useStoreDispatch } from '../store/store';
import { apiInstance } from '../settings/apiInstance';
import { employedPatchedSaved, getEmployed } from '../store/actions/employes';
import { useStore } from '../store/store';
import { GeneralDialog } from './GeneralDialog';
import { EmployedForm } from '../vacunacion/components/Employes/EmployedForm';
import { schema } from '../vacunacion/helpers/helpers';
import EmployeeAdapter from '../domain/Employees/EmployeeAdapter';
let adapter = new EmployeeAdapter();
export function EditFormDialog() {
  const { ui, state, employedForm } = useStore();
  const { actualEmployed } = state;
  const { setOpenEditModal, employesDispatch } = useStoreDispatch();

  const handleOk = () =>{
    const employedFormDB = adapter.createToDB(employedForm) 
    schema.validate(employedForm)
    .then(valid => apiInstance.patch(`/employes/${valid.Id}`, employedFormDB))
    .then(() => {
        setOpenEditModal(false)
        employesDispatch(getEmployed(employedFormDB))
        employesDispatch(employedPatchedSaved(employedFormDB))
        
    })
    .catch(err => {
        alert(err.message)
        employesDispatch(getEmployed(employedFormDB))
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
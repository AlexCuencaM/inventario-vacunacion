import * as React from 'react';
import Button from '@mui/material/Button';
import { useStore } from '../store/store';
import { useStoreDispatch } from '../store/store';
import { apiInstance } from '../settings/apiInstance';
import { employedDeleted, getEmployedDefault } from '../store/actions/employes';
import { GeneralDialog } from './GeneralDialog';
const Body = () => <p>Desea eliminar este empleado ?</p> 
export function ConfirmDialog() {
  const { ui, employedForm } = useStore();
  const { setOpenModal, employesDispatch } = useStoreDispatch();
  const handleOk = () =>{
    apiInstance.delete(`/employes/${employedForm.Id}`)
    .then(() => {
        setOpenModal(false)
        employesDispatch(getEmployedDefault())
        employesDispatch(employedDeleted(employedForm.Id))
    })
  }
  const handleCancel = () => {
    employesDispatch(getEmployedDefault())
    setOpenModal(false)
  };
  return (
    <GeneralDialog open={ui.openModal} title="Confirmacion de eliminación" Component={Body}>
        <Button autoFocus onClick={handleCancel}>
          No
        </Button>
        <Button color="secondary" onClick={handleOk}>Borrar</Button>
    </GeneralDialog>
  );
}
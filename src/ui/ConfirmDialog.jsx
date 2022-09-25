import * as React from 'react';
import Button from '@mui/material/Button';
import { useStore } from '../store/store';
import { useStoreDispatch } from '../store/store';
import { apiInstance } from '../settings/apiInstance';
import { employedDeleted, getEmployed } from '../store/actions/employes';
import { GeneralDialog } from './GeneralDialog';
const Body = () => <p>Desea eliminar este empleado ?</p> 
export function ConfirmDialog() {
  const { ui, state } = useStore();
  const { setOpenModal, employesDispatch } = useStoreDispatch();
  const handleOk = () =>{
        apiInstance.delete(`/employes/${state.actualEmployed.id}`)
        .then(() => {
            setOpenModal(false)
            employesDispatch(getEmployed(null))
            employesDispatch(employedDeleted(state.actualEmployed.id))
        })
  }
  const handleCancel = () => {
    employesDispatch(getEmployed(null))
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
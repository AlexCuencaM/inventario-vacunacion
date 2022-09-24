import * as React from 'react';
import Button from '@mui/material/Button';
import { useStoreDispatch } from '../store/store';
import { apiInstance } from '../settings/apiInstance';
import { employedDeleted } from '../store/actions/employes';
import { useStore } from '../store/store';
import { GeneralDialog } from './GeneralDialog';
import { EmployedForm } from '../vacunacion/components/Employes/EmployedForm';
export function EditFormDialog() {
  const { ui, state } = useStore();
  const { actualEmployed } = state;
  const { setOpenEditModal, employesDispatch } = useStoreDispatch();
  const handleOk = () =>{
        apiInstance.patch(`/employes/${actualEmployed.id}`)
        .then(() => {
            setOpenEditModal(false)
            employesDispatch(employedDeleted(id))
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
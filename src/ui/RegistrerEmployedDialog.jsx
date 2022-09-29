import * as React from 'react';
import Button from '@mui/material/Button';
import { useStore } from '../store/store';
import { useStoreDispatch } from '../store/store';
import { GeneralDialog } from './GeneralDialog';
import { RegisterEmployed } from '../vacunacion/components/Employes/RegisterEmployed';

export const RegistrerEmployedDialog = () => {
  const { ui } = useStore();
  const { setOpenRegisterModal } = useStoreDispatch();
  const handleCancel = () =>{
    setOpenRegisterModal(false)
  }
  const handleOk = () =>{
    alert("En construcción :D")
    setOpenRegisterModal(false)
  }
  return (
    <GeneralDialog open={ui.openRegisterModal} title={`Dar de alta`} Component={RegisterEmployed}>
        <Button autoFocus onClick={handleCancel}>
          Cancelar
        </Button>
        <Button color="secondary" onClick={handleOk}>Registrar</Button>
    </GeneralDialog>
  )
}

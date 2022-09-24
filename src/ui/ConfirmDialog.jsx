import * as React from 'react';
import Button from '@mui/material/Button';
import { useStoreDispatch } from '../store/store';
import { apiInstance } from '../settings/apiInstance';
import { employedDeleted } from '../store/actions/employes';
import { GeneralDialog } from './GeneralDialog';
const Body = () => <p>Desea eliminar este empleado ?</p> 
export function ConfirmDialog(props) {
  const {id} = props
  const { setOpenModal } = useStoreDispatch();
  const handleOk = () =>{
        apiInstance.delete(`/employes/${id}`)
        .then(() => {
            setOpenModal(false)
            employesDispatch(employedDeleted(id))
        })
  }
  const handleCancel = () => {
    setOpenModal(false)
  };

  return (
   
    <GeneralDialog title="Confirmacion de eliminación" Component={Body}>
        <Button autoFocus onClick={handleCancel}>
          No
        </Button>
        <Button color="secondary" onClick={handleOk}>Borrar</Button>
    </GeneralDialog>
  );
}
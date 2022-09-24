import * as React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { useStoreDispatch } from '../store/store';
import { apiInstance } from '../settings/apiInstance';
import { employedDeleted } from '../store/actions/employes';
import { useStore } from '../store/store';
import { GeneralDialog } from './GeneralDialog';
import { EmployedForm } from '../vacunacion/components/Employes/EmployedForm';
export function EditFormDialog() {
//   const {ti} = props
  const { ui } = useStore();
  const { setOpenEditModal } = useStoreDispatch();
  const handleOk = () =>{
        // apiInstance.delete(`/employes/${id}`)
        // .then(() => {
        //     setOpenEditModal(false)
        //     employesDispatch(employedDeleted(id))
        // })
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

// EditFormDialog.propTypes = {
//     title: PropTypes.string.isRequired,
// };
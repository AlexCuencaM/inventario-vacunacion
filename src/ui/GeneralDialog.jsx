import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import { useStore } from '../store/store';
export function GeneralDialog(props) {
  const { valueProp, open, Component, ...other } = props;
  const { ui } = useStore();
//   React.useEffect(() => {
//     if (!open) {
//       setValue(valueProp);
//     }
//   }, [valueProp, open]);

//   const handleCancel = () => {
//     onClose();
//   };

//   const handleOk = () => {
//     onClose(value);
//   };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      open={ui.openModal}
      {...other}
    >
      <DialogTitle>{ title } </DialogTitle>
      <DialogContent>
        <Component/>
      </DialogContent>
      <DialogActions>
        {children}
      </DialogActions>
    </Dialog>
  );
}

EditDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

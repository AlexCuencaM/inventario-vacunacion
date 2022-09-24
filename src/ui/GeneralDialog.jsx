import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import { useStore } from '../store/store';
export function GeneralDialog(props) {
  const { title, Component, children, ...other } = props;
  const { ui } = useStore();
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

GeneralDialog.propTypes = {
    title: PropTypes.string.isRequired,
};

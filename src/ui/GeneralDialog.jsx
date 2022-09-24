import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';

export function GeneralDialog(props) {
  const { title, Component, children, open, ...other } = props;
  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      open={open}
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
    open: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
};

import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
export const EmployedForm = (props) =>{
    const variant  = props?.variant ?? "standard"
    return (
        <>
            <TextField
            autoFocus
            margin="dense"
            id="cedula"
            label="Cédula"
            type="text"
            fullWidth
            variant={variant}
            />
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombres"
            type="text"
            fullWidth
            variant={variant}
            />
            <TextField
            autoFocus
            margin="dense"
            id="lastname"
            label="Apellidos"
            type="text"
            fullWidth
            variant={variant}
            />
            <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Correo electrónico"
            type="email"
            fullWidth
            variant={variant}
            />
        </>
      )
}
EmployedForm.propTypes = {
    variant: PropTypes.string,
};
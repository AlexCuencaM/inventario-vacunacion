import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { useStore } from '../../../store/store';
export const EmployedForm = (props) =>{
    const { state } = useStore();
    const {actualEmployed:employed} = state
    const variant  = props?.variant ?? "standard"
    return (
        <>
            <TextField
            autoFocus
            margin="dense"
            id="cedula"
            label="Cédula"
            value={employed.cedula}
            type="text"
            fullWidth
            variant={variant}
            />
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombres"
            value={employed.names}
            type="text"
            fullWidth
            variant={variant}
            />
            <TextField
            autoFocus
            margin="dense"
            id="lastname"
            value={employed.lastnames}
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
            value={employed.email}
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
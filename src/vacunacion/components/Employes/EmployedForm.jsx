import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { useStore, useStoreDispatch } from '../../../store/store';
export const EmployedForm = (props) =>{
    const { state, employedForm:employed } = useStore();
    const { setEmployedForm } = useStoreDispatch();
    const variant  = props?.variant ?? "standard"
    const onInputChange = ({ target }) => {
        setEmployedForm({
            ...employed,
            [target.name] : target.value
        });
    }
    return (
        <>
            <TextField
            autoFocus
            margin="dense"
            id="cedula"
            name="cedula"
            label="Cédula"
            value={employed.cedula}
            onChange={onInputChange}
            type="text"
            fullWidth
            variant={variant}
            />
            <TextField
            autoFocus
            margin="dense"
            id="names"
            name="names"
            label="Nombres"
            value={employed.names}
            type="text"
            onChange={onInputChange}
            fullWidth
            variant={variant}
            />
            <TextField
            autoFocus
            margin="dense"
            id="lastnames"
            name="lastnames"
            value={employed.lastnames}
            onChange={onInputChange}
            label="Apellidos"
            type="text"
            fullWidth
            variant={variant}
            />
            <TextField
            autoFocus
            margin="dense"
            id="email"
            name="email"
            label="Correo electrónico"
            value={employed.email}
            onChange={onInputChange}
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
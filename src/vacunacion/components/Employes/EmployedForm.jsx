import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { useStore, useStoreDispatch } from '../../../store/store';
import { Grid } from '@mui/material';
export const EmployedForm = (props) =>{
    
    const { employedForm: employed } = useStore();
    const { setEmployedForm } = useStoreDispatch();
    const variant  = props?.variant ?? "standard"
    const columns = Math.floor(12 / (props?.columns ?? 1)) 
    const onInputChange = ({ target }) => {
        setEmployedForm({
            ...employed,
            [target.name] : target.value
        });
    }
    return (
        <>
            <Grid item xs={12} sm={12} md={columns}>
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
            </Grid>
            <Grid item xs={12} sm={12} md={columns}>
                <TextField
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
            </Grid>
            <Grid item xs={12} sm={12} md={columns}>
                <TextField
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
            </Grid>
            <Grid item xs={12} sm={12} md={columns}>
                <TextField
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
            </Grid>
        </>
      )
}
EmployedForm.propTypes = {
    variant: PropTypes.string,
    columns: PropTypes.number
};
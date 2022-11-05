import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useStoreDispatch } from '../../../store/store';
import { getEmployed } from '../../../store/actions/employes';
import { EmployedHeaderCard } from './EmployedHeaderCard';
export default function EmployedCard(props) {
  const { employed } = props
  const { setOpenModal, setOpenEditModal, employesDispatch, setEmployedForm} = useStoreDispatch();
  const handleClick = (setModal) =>{
    setEmployedForm(employed)
    employesDispatch(getEmployed(employed))
    setModal(true)
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
        <EmployedHeaderCard employed={employed}/>
        <CardContent>
            <Typography variant="body2" color="text.secondary">
            Cédula: {employed.Cedula}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Correo: {employed.Email}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={() => handleClick(setOpenEditModal)}>Editar</Button>
            <Button color="secondary" size="small" onClick={() => handleClick(setOpenModal)}>Eliminar</Button>
        </CardActions>
    </Card>
    
  )
}
EmployedCard.propTypes = {
    employed: PropTypes.object.isRequired,
};

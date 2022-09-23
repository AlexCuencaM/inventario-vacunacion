import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ConfirmDialog } from '../../ui/ConfirmDialog';
import { apiInstance } from '../../settings/apiInstance';

export default function EmployedCard(props) {
    const { employed } = props
  const [deleteModal, setDeleteModal] = React.useState(false)
  const onClose = (value) =>{
    
    if(value === "confirm")
        apiInstance.delete(`/employes/${employed.id}`)
        .then((res) => {
            setDeleteModal(false)
        })
        // .catch((res) => {
        //     console.log(res)
        // })
  }
  const handleClick = () =>{
    setDeleteModal(true)  
  }
  return (
    <>
        <Card sx={{ maxWidth: 345 }}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {employed.names} {employed.lastnames}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Cédula: {employed.cedula}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Correo: {employed.email}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Editar</Button>
            <Button color="secondary" size="small" onClick={handleClick}>Eliminar</Button>
        </CardActions>
        </Card>
        <ConfirmDialog onClose={onClose} open={deleteModal} value={"confirm"}/>
    </>
  )
}

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function EmployedCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.employed.names} {props.employed.lastnames}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Cédula: {props.employed.cedula}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Correo: {props.employed.email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Editar</Button>
        <Button color="secondary" size="small">Eliminar</Button>
      </CardActions>
    </Card>
  );
}

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useStoreDispatch } from '../../../store/store';
import { getAllEmployes, getEmployesByTypeVaccine } from '../../../store/actions/employes';
import { apiInstance } from '../../../settings/apiInstance';

export const TypeVaccineFilter = () => {
  const [typeVaccine, setTypeVaccine] = React.useState(0);
  const [typeVaccines, setTypeVaccines] = React.useState([{
    id: 0,
    description: "Todos"
  }]);
  const { employesDispatch } = useStoreDispatch();
  React.useEffect(() => {
    apiInstance.get("/typeVaccines")
    .then(({data}) => {
        setTypeVaccines(vaccy => [...vaccy, ...data])
    })
  }, [])
  
  const handleChange = ({ target }) => {
    const { value } = target;
    setTypeVaccine(value);
    if(value === 0){
        apiInstance.get("/employes")
        .then(({ data }) =>{
            employesDispatch(getAllEmployes(data))
        })
    }
    else {
        apiInstance.get(`/employesVaccines?_expand=employes&typeVaccineId=${value}`)
        .then(({ data }) =>{
            employesDispatch(getEmployesByTypeVaccine(data))
        })
    }
  };

  return (
      <FormControl fullWidth>
        <InputLabel id="vaccine-type-label">Tipo</InputLabel>
        <Select
          labelId="vaccine-type-label"
          id="vaccine-type-select"
          value={typeVaccine}
          label="vaccineType"
          onChange={handleChange}
        >
            {typeVaccines.map(typeVaccine => <MenuItem key={typeVaccine.id} value={typeVaccine.id}>{typeVaccine.description}</MenuItem>)}
        </Select>
      </FormControl>
  );
}

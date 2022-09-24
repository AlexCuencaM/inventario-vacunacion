import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useStoreDispatch } from '../../store/store';
import { getAllEmployes, getEmployesByStateVaccine } from '../../store/actions/employes';
import { apiInstance } from '../../settings/apiInstance';
const stateVaccineFilter = {
    all: "",
    vaccinated: "Vacunado",
    noVaccinated: "No_vacunado"
}
export const StateFilter = () => {
  const [vaccineState, setvaccineState] = React.useState('');
  const { employesDispatch } = useStoreDispatch();
  const handleChange = ({ target }) => {
    const { value } = target;
    setvaccineState(value);
    if(value === stateVaccineFilter.all){
        apiInstance.get("/employes")
        .then(({ data }) =>{
            employesDispatch(getAllEmployes(data))
        })
    }
    else if(value === stateVaccineFilter.vaccinated || 
        value === stateVaccineFilter.noVaccinated){
        apiInstance.get(`/employesVaccines?_expand=employes&state=${value}`)
        .then(({ data }) =>{
            employesDispatch(getEmployesByStateVaccine(data))
        })
    }
  };

  return (
    // <Box>
      <FormControl fullWidth>
        <InputLabel id="vaccine-type-label">Estado</InputLabel>
        <Select
          labelId="vaccine-type-label"
          id="vaccine-state-select"
          value={vaccineState}
          label="vaccineState"
          onChange={handleChange}
        >
          <MenuItem value={stateVaccineFilter.all}>Todos</MenuItem>
          <MenuItem value={stateVaccineFilter.vaccinated}>Vacunados</MenuItem>
          <MenuItem value={stateVaccineFilter.noVaccinated}>No vacunados</MenuItem>
        </Select>
      </FormControl>
    // </Box>
  );
}

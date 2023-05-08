import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SelectButton() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={material}
      
      renderInput={(params) => <TextField {...params} label="Материал" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const material = [
  { label: 'Песок' },
  { label: 'Щебень' },
  { label: 'Опилки' },
  { label: 'Глина' },
  { label: 'Галька' },
  { label: "Камень" },
  { label: 'Грунт' },
  
];
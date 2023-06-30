import { useState, useEffect } from 'react';
import { Autocomplete,Grid,TextField}from "@mui/material"

const SelectCountry = (props) => {
  const{value,setValue,label}=props
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(resp => resp.json())
      .then(data => data.filter(item => "currencies" in item))
      .then(filteredData => {
        const userList = filteredData.map(item => `${item.flag} ${Object.keys(item.currencies)[0]}-${item.name.common}`);
        setUsers(userList);
      });
  }, []);

  return (
    <Grid item xs={12} md={3}>
      <Autocomplete
        value={value}
        disableClearable
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        
        options={users}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </Grid>
  );
};

export default SelectCountry;

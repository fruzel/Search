import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import GoogleIcon from '@mui/icons-material/Google';
import Grid from '@mui/material/Grid';

export default function Nav(props) {
  const [value, setValue] = React.useState('search');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.setSearchType(newValue);
    props.setResults('');
  };

  return (
    
    <Grid container spacing={2} sx={{mb : 2, bgcolor: '#bbdefb'}}>
      <Grid item xs={4}>
        <GoogleIcon sx={{
          position: "relative",
          left: "20%",
          top: "20%"
        }} />
      </Grid>

      <Grid item xs={8}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="text.primary tabs example"
          sx={{color: "text.disabled"}}
        >
          <Tab value="search" label="Search" />
          <Tab value="images" label="Images" />
        </Tabs>
      </Grid>
    </Grid>
  );
}
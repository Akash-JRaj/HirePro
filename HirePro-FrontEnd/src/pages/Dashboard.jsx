import { Box, Button, Tab, Typography } from '@mui/material';
import React, { useState } from 'react'
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Link } from 'react-router-dom';
import Create from './Create';

export default function Dashboard() {

    const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
    <Box sx={{ display:"flex", flexDirection:"row", justifyContent:"center"}}>
    <Typography variant='h3'sx={{ margin:"2%"}} align='center'>EMPLOYER DASHBOARD</Typography>
    <Button sx={{ margin:"2% 3%"}} variant="outlined"><Link to="/">Home</Link></Button>
    </Box>
    <Create/>
    </>
  );
}

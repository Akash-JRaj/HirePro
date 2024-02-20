import { Box, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'


const initial = {profile : "", exp : 0, techs : [], desc : ""}

export default function Create() {

    const[form, setForm] = useState(initial);

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const {profile, exp, desc } = form;

  return (
    <div>
      <Paper sx={{padding : "2%"}} elevation={3}>
        <Typography sx={{padding : "3% auto"}} align='center' variant='h5'>
            Create new post
        </Typography>
        <form onSubmit={handleSubmit}>
            <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
            >
                <TextField
                    type='string'
                    required
                    label="job-profile"
                    onChange={(e) => setForm({...form, profile : e.target.value})}
                    variant='outlined'
                    value={profile}
                    sx={{ width: "50%", margin: "2% auto" }}
                />
                <TextField
                    min="0"
                    type='number'
                    required
                    label="Years of experience"
                    onChange={(e) => setForm({...form, exp : e.target.value})}
                    variant='outlined'
                    value={exp}
                    sx={{ width: "50%", margin: "2% auto" }}
                />
                <TextField
                    type="string"
                    sx={{ width: "50%", margin: "2% auto" }}
                    required
                    multiline
                    rows={4}
                    onChange={(e) => setForm({ ...form, desc: e.target.value })}
                    label="Job-desc"
                    variant="outlined"
                    value={desc}
                />
            </Box>
        </form>
      </Paper>
    </div>
  )
}

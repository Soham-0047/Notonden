import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createrecord, register } from '../redux/apiCalls';
import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

// studentID: { type: String, required: true, unique: true },
//     name: { type: String, required: true },
//     date:{ type: Date, default: Date.now },
//     email: { type: String, required: false},
//     phoneNumber: { type: String, required:false },
//     status: { type: String, enum: ['present', 'absent'], required: true }


const defaultTheme = createTheme();

const RecordForm = () => {
  const [studentID,setStudentId] = useState("");
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phoneNumber,setPhonenumber] = useState("")
  const [status,setStatus] = useState("")

  const [date, setSelectedDate] = useState(new Date());


  const dispatch = useDispatch();

  const handleClick = (e) =>{
    e.preventDefault();
    createrecord(dispatch, {studentID,name,email,phoneNumber,status,date})
  }
  return (
    <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Create Student Record
        </Typography>
        <Box component="form"  noValidate sx={{ mt: 1 }}>
        <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="studentID"
            label="Student ID"
            type="studentID"
            id="studentID"
            a
            onChange={(e) => setStudentId(e.target.value)}
          />
           <TextField
            margin="normal"
           
            fullWidth
            id="phoneNumber"
            label="Phone Number"
            name="name"
            autoFocus
            onChange={(e) => setPhonenumber(e.target.value)}
          />
          
         <Grid container gap="0.5rem">
            <Grid item xs >
            <FormControl fullWidth margin="normal"
            >
           <InputLabel required id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <MenuItem value="present">Present</MenuItem>
              <MenuItem value="absent">Absent</MenuItem>
            </Select>
          </FormControl>
            </Grid>
            <Grid item >
            <FormControl margin="dense"
            required
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
      
        <DatePicker
          label="Date"
          
          value={dayjs(date)}
          id="date"
          name="date"
          onChange={(date) => setSelectedDate(date)}
        />
      </DemoContainer>
          </LocalizationProvider>
         
            </FormControl>
            
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleClick}
          >
            Create
          </Button>
          
        </Box>
      </Box>
   
    </Container>
  </ThemeProvider>
  )
}

export default RecordForm
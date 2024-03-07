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
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { createrecord, register } from '../redux/apiCalls';
import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { updateRecordFailure, updateRecordStart, updateRecordSuccess } from '../redux/userRedux';
import axios from 'axios';


const defaultTheme = createTheme()

const UpdateRecord = () => {

    const dispatch = useDispatch();

    const {id} = useParams();
    

    const { currentUser } = useSelector((state) => state.user) || "";

    const [studentID,setStudentId] = useState("");
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phoneNumber,setPhonenumber] = useState("")
    const [status,setStatus] = useState("")
    const [updatesuccess,setupdatesuccess] = useState(false)

    const [formData,setFormData] = useState({})

    const [rec,setRec] = useState({})

    console.log(currentUser)

    const handleChange = (e) =>{
        setFormData({...formData,[e.target.id]:e.target.value})
    }

    const handleStatusChange = (e) => {
      setFormData({ ...formData, status: e.target.value }); // Capture status change separately
    };

    console.log(formData)

     console.log(updatesuccess)
     
    const handleSubmit = async(e) =>{
        e.preventDefault();

        try {
            
            dispatch(updateRecordStart())

            const res = await fetch (`http://localhost:5000/api/records/update/${id}`, {
                method:'PUT',
                headers:{
                    'Content-Type':'application/json',

                },
                body:JSON.stringify(formData)
            })

            const data = await res.json();

            if(data.success === false){
                dispatch(updateRecordFailure(data))
                return;
              }
        
              dispatch(updateRecordSuccess(data))
              setupdatesuccess(true)

        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() =>{

      const getPreviousRecords = async() =>{

        try {
          
          const pres = await axios.get(`http://localhost:5000/api/records/find/${id}`)

          
          setRec(pres.data)
        } catch (error) {
          console.log(error)
        }
      }
      getPreviousRecords()
    },[])

  

    console.log(rec)

   

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
   
        <Typography component="h1" variant="h5">
          Update Student Record
        </Typography>
        <Box component="form"  noValidate sx={{ mt: 1 }}>
        <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            defaultValue={rec.name}
            autoFocus
            onChange={handleChange}
          />
          {rec.name}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            defaultValue={rec.email}
            autoFocus
            onChange={handleChange}
          />
          {rec.email}
          <TextField
            margin="normal"
            required
            fullWidth
            name="studentID"
            label="Student ID"
            type="studentID"
            id="studentID"
            defaultValue={rec.studentID}
            a
            onChange={handleChange}
          />
          {rec.studentID}
           <TextField
            margin="normal"
           
            fullWidth
            id="phoneNumber"
            label="Phone Number"
            name="phoneNumber"
            defaultValue={rec.phoneNumber}
            autoFocus
            onChange={handleChange}
          />
          {rec.phoneNumber}
         <Grid container gap="0.5rem">
            <Grid item xs >
            <FormControl fullWidth margin="normal"
            >
           <InputLabel required id="status">Status</InputLabel>
            <Select
              labelId="status"
              id="status"
              
              value={rec.status}
              onChange={handleStatusChange}
            >
              <MenuItem value="present">Present</MenuItem>
              <MenuItem value="absent">Absent</MenuItem>
            </Select>
          </FormControl>
            </Grid>
            <Grid item >
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Update The Record
          </Button>
          
        </Box>
      </Box>
   
    </Container>
  </ThemeProvider>
  )
}

export default UpdateRecord
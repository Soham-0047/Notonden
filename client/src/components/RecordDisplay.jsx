
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid, Stack } from '@mui/material';
import SingleRecord from './SingleRecord';
import axios from 'axios';


const RecordDisplay = () => {

  const [rec,setRec] = React.useState([])

  React.useEffect(() =>{
    const getRecords = async() =>{

      try {
        
        const res= await axios.get("http://localhost:5000/api/records")
        setRec(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    getRecords()
  },[])
  return (
    <Container maxWidth="md" sx={{marginTop:"3%"}}>
      <Grid container spacing={4} gap={2} marginTop={5}>
          {rec.map((item) => <SingleRecord item={item} key={item.id}/>)}
 
    </Grid>
    </Container>
  )
}

export default RecordDisplay
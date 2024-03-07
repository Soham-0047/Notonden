
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Grid, Stack } from '@mui/material';
import { useSelector } from 'react-redux';


// const user = useSelector((state) => state.user?.currentUser) ||"";

const formatDateTime = (dateString) => {
  const dateObject = new Date(dateString);
  const formattedDate = dateObject.toLocaleDateString(); // Format the date
  const formattedTime = dateObject.toLocaleTimeString(); // Format the time
  return { formattedDate, formattedTime };
};


const SingleRecord = ({item}) => {
  
  const { formattedDate, formattedTime } = formatDateTime(item.date);
  const { currentUser } = useSelector((state) => state.user) || "";

    const handleDeleteAccount = async() =>{
        try {
         
    
         const res=  await fetch(`https://notonden.onrender.com/api/records/delete/${item._id}`, {
    
           method:'DELETE',
         })
    
         const data = await res.json();
    
         if(data.success === false){
           console.log("Deleted unsuccess")
           return;
         }
    
         console.log("Deleted Success")
        } catch (error) {
        console.log(error)
        }
     }

 
  return (
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Grid  container >
        <Grid item xs>
          <Typography sx={{ fontSize:"1rem",fontWeight:"600" }}  gutterBottom>
        {item.name}
      </Typography> 
        </Grid>
        <Grid item>
            <Typography sx={{ mb: 1.5 }} >
        {item.studentID}
      </Typography>
        </Grid>
    
      </Grid>
    
     
      <Typography variant="body2">
        {item.phoneNumber}
        <br />
        {item.email}
      </Typography> 

      <Typography variant="h7" textTransform={"capitalize"} fontWeight={600} lineHeight={2} component="div">
        {item.status} <span style={{fontWeight:"300",paddingLeft:"2rem"}}>{formattedDate}</span> <br/>{formattedTime}
      </Typography>
    </CardContent>

    <CardActions>
    <Grid container>
            <Grid item xs>
            <Button size={"small"}variant='contained' >
                    <Link to={`/records/${item._id}`}style={{textDecoration:'none',color:'black',cursor:"pointer"}} variant="body2">
                {"Update"}
              </Link>
                </Button>
            </Grid>
            <Grid item>
                <Button size={"small"}variant='contained' onClick={handleDeleteAccount} >
                    <Link style={{textDecoration:'none',color:'black',cursor:"pointer"}} variant="body2">
                {"Delete"}
              </Link>
                </Button>
              
            </Grid>
          </Grid>
     
    </CardActions>
  </Card>
  )
}

export default SingleRecord
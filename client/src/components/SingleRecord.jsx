
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';


// const user = useSelector((state) => state.user?.currentUser) ||"";


const SingleRecord = ({item}) => {

  const { currentUser } = useSelector((state) => state.user) || "";

    const handleDeleteAccount = async() =>{
        try {
         
    
         const res=  await fetch(`http://localhost:5000/api/records/delete/${item._id}`, {
    
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
      <Typography sx={{ fontSize:"1rem",fontWeight:"600" }}  gutterBottom>
        {item.name}
      </Typography>
      <Typography variant="h5" component="div">
        
      </Typography>
      <Typography sx={{ mb: 1.5 }} >
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
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
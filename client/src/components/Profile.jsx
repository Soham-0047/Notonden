import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';

const Profile = () => {
    const { currentUser } = useSelector((state) => state.user) || "";
  return (
   <>
   <Typography variant='h6' textAlign={"center"} p={5}> Hello {currentUser.name}, 404 Not Found</Typography>
   </>
  )
}

export default Profile
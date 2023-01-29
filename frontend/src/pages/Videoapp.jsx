import React from 'react'
import Videoplayer from '../components/Videoplayer';
import Options from '../components/Options'; 
import { Box, Grid,Input,Button  } from "@chakra-ui/react";


const Videoapp = () => {
  return (
    <div>
        <Box display="flex">
        <Options/>
    <Videoplayer/>
   
    </Box>
    </div>
  )
}

export default Videoapp
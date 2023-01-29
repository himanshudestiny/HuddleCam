import { useState, useEffect} from 'react'
import { Box, Text } from '@chakra-ui/react'




const Log = () => {
  const [ name, setName ] = useState("");
  useEffect(() => {
  const userName = localStorage.getItem("userName");
   setName(userName);
  },[name])



  return (
    <Box h='80px' align='right'>
     <Box w='auto' mt='5' color='#38E54D'  > <Text fontSize='4xl' align='right' mr='20' fontWeight='bolder' fontFamily='cursive'>{name}</Text></Box>
    </Box>
  )
}

export default Log

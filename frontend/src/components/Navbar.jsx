import React from 'react'

import { SimpleGrid, Box, Button, Text } from '@chakra-ui/react'

import { Link} from "react-router-dom";

const Home = () => {
  
  const userName = localStorage.getItem("userName");
  console.log(userName);
  

 const handleClick = () => {
  localStorage.setItem("userName", "");
  localStorage.setItem("token", "");
  window.location.reload(true);
 }

  


  return (
    <SimpleGrid columns={[ 1,1,1,5,5,5 ]} background='#38E54D' color='white' m='auto' align='center' position='sticky' z-index='2' top='0'>
       <Link to='/'><Box display='flex' w='30%' m='auto' mt='2'>
    <Text p='2' fontSize='2xl' fontWeight='bolder' backgroundColor='white' color='#38E54D' m='auto' border='1px' borderColor='white' >Huddle </Text>
    <Text p='2' border='1px' borderColor='white' fontSize='2xl' fontWeight='bolder' backgroundColor='#38E54D' color='white' m='auto' >Cam</Text>
    </Box></Link>
   <Box height='70px' fontSize="40px"><Link to='/'> <Button colorScheme='whiteAlpha' w='40%' border='2px' >Home</Button> </Link>  </Box>
  <Box height='70px' fontSize="40px"><Link to='/signup'><Button colorScheme='whiteAlpha' w='40%' border='2px'>Signup</Button></Link></Box>
 { userName ? <Box  height='70px' fontSize="40px"><Link to='/login'> <Button onClick ={ handleClick } colorScheme='whiteAlpha' w='40%'  border='2px'>Logout</Button></Link></Box> : <Box height='70px' fontSize="40px"><Link to='/login'> <Button  border='2px' colorScheme='whiteAlpha' w='40%'>Login</Button></Link></Box> } 
 <Box height='70px' fontSize="40px"><Link to='/freqs'> <Button colorScheme='whiteAlpha' w='40%' border='2px' >FAQs</Button> </Link>  </Box>
  </SimpleGrid>
  )
}

export default Home
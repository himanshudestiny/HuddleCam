import React from 'react'
import { SimpleGrid, Box, Image, Text, Button } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
  const uid = localStorage.getItem("userId");
  const handleClickOne = () => [
    navigate(`/todos/${uid}`)
  ]
  return (
    <div>
      <Text fontSize='4xl' fontWeight='bolder' m='auto' w='70%' align='center' fontFamily='sans-serif'>Learn in a way you never thought possible.</Text>
<Box w='70%' fontWeight='bold' fontSize='xl' m='auto' line-height='2' align='center' p='2'>
  <Text>Welcome to our innovative Educational app, where learning is transformed into an interactive and engaging experience. 
    Our app is designed to empower you to reach your full potential and achieve academic success. Whether you're a student, 
    teacher, or professional, our app offers endless opportunities to master any subject. 
    With our cutting-edge technology, you'll have access to a wide range of interactive tools and resources to help you 
    learn in a way you never thought possible. 
    From virtual reality experiences to gamified lessons, our app is sure to capture your attention and inspire you to 
    think differently about education. Join us and discover a new world of learning today!</Text>
</Box>

        <SimpleGrid columns={[1,1,1,2,2,2]} spacing={10} w='80%' m='auto' mt='20'>
  <Box  height='auto'>
    <Image src='https://ouch-cdn2.icons8.com/bjZfUQbXxT_F_cf_otqGyuZGljSfbz1YzR106rv1yVY/rs:fit:512:384/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzkx/LzM4NmE0Mzg2LTg3/MjYtNGNkZC1iZTVj/LTY3MmM3NmIxZmZj/Yy5wbmc.png'></Image>
  </Box>
  <Box height='auto'>
    <Box display='flex' w='30%' m='auto'>
    <Text p='2' border='4px' borderColor='#38E54D' fontSize={['2xl','2xl','2xl','4xl','4xl','4xl']} fontWeight='bolder' backgroundColor='white' color='#38E54D' m='auto' >Huddle </Text>
    <Text p='2' border='4px' borderColor='#38E54D' fontSize={['2xl','2xl','2xl','4xl','4xl','4xl']} fontWeight='bolder' backgroundColor='#38E54D' color='white' m='auto' >Todo</Text>
    </Box>
    <Text mt='6' fontSize='2xl' fontWeight='bolder'>Master any subject with our educational to-do app</Text>
    <Text mt='2' fontSize='lg' fontWeight='medium' >Welcome to our creative Educational Todo App, where productivity and learning come together. Our app is designed to revolutionize the way you manage your tasks and achieve academic success. </Text>
    <Button colorScheme='whatsapp' color='white' w='100%' mt='6' onClick ={handleClickOne} z-index='0'>Todos</Button>
  </Box>
</SimpleGrid>
<SimpleGrid columns={[1,1,1,2,2,2]} spacing={10} w='80%' m='auto' mt='20'>
  
  <Box height='auto'>
    <Box display='flex' w='30%' m='auto'>
    <Text p='2' border='4px' borderColor='#38E54D' fontSize={['2xl','2xl','2xl','4xl','4xl','4xl']} fontWeight='bolder' backgroundColor='white' color='#38E54D' m='auto' >Huddle </Text>
    <Text p='2' border='4px' borderColor='#38E54D' fontSize={['2xl','2xl','2xl','4xl','4xl','4xl']} fontWeight='bolder' backgroundColor='#38E54D' color='white' m='auto' >Chat</Text>
    </Box>
    <Text mt='6' fontSize='2xl' fontWeight='bolder' >Education redefined.</Text>
    <Text mt='2' fontSize='lg' fontWeight='medium' > Our app is designed to empower you to reach your full potential and achieve academic success. Whether you're a student, teacher, or professional, our app offers endless opportunities to master any subject. </Text>
   <Link to='/chatapp'> <Button colorScheme='whatsapp' color='white' w='100%' mt='6'>Chat</Button></Link>
  </Box>
  <Box  height='auto'>
    <Image src='https://ouch-cdn2.icons8.com/kc8VCNYhZ7i818-jJbftNHvPYOlT7or3TTaRyJ45TZo/rs:fit:512:384/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODE4/LzMzNzFkYjE5LTBl/MzQtNGY1OS05ZmY0/LTc1MjI3YzkyNWIz/MS5wbmc.png'></Image>
  </Box>
</SimpleGrid>
<SimpleGrid columns={[1,1,1,2,2,2]} spacing={10} w='80%' m='auto' mt='20' mb='20'>
  <Box  height='auto'>
    <Image src='https://ouch-cdn2.icons8.com/4eCPuWoyJqSAtoFbaBLkjnX4ANKjJit6SULiu4geUsk/rs:fit:395:218/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjc2/L2QyNGYxZDVhLTg2/MGMtNDQ5Zi1iZDMy/LTY4MWM3ODQ3N2E0/Yy5wbmc.png'></Image>
  </Box>
  <Box height='auto'>
    <Box display='flex' w='30%' m='auto'>
    <Text p='2' border='4px' borderColor='#38E54D' fontSize={['2xl','2xl','2xl','4xl','4xl','4xl']} fontWeight='bolder' backgroundColor='white' color='#38E54D' m='auto' >Huddle </Text>
    <Text p='2' border='4px' borderColor='#38E54D' fontSize={['2xl','2xl','2xl','4xl','4xl','4xl']} fontWeight='bolder' backgroundColor='#38E54D' color='white' m='auto' >Vid</Text>
    </Box>
    <Text mt='6'fontSize='2xl' fontWeight='bolder' >Transform your learning experience.</Text>
    <Text mt='2'fontSize='lg' fontWeight='medium' >With our cutting-edge technology, you'll have access to a wide range of interactive tools and resources to help you learn in a way you never thought possible. From virtual reality experiences to gamified lessons,</Text>
   <Link to='/videoapp'> <Button colorScheme='whatsapp' color='white' w='100%' mt='6'>Video Call</Button></Link>
  </Box>
</SimpleGrid>
    </div>
  )
}

export default Home
import { useState } from 'react'
import { Input, Button, Text, Box } from '@chakra-ui/react'
import { useParams, useNavigate } from 'react-router-dom';

const Update = () => {
    const [ name, setName ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();
    
    const updateName = () => {
        const payload = {
            name,
        }
        fetch(`https://real-plum-hare-yoke.cyclic.app/todos/update/${id}`, {
      method:"PATCH",
      body:JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        "Authorization":localStorage.getItem("token")
      }
    }).then(res => res.json())
    .then(res =>{
      console.log(res);
      
    })
    .catch(err => console.log(err))
    
    navigate(`/todos/${id}`)
    }
 
    const updateTitle = () => {
        const payload = {
            title,
        }
        fetch(`https://real-plum-hare-yoke.cyclic.app/todos/update/${id}`, {
            method:"PATCH",
            body:JSON.stringify(payload),
            headers: {
              "Content-Type": "application/json",
              "Authorization":localStorage.getItem("token")
            }
          }).then(res => res.json())
          .then(res =>{
            console.log(res);
          })
          .catch(err => console.log(err))
    }

    const updateDescription = () => {
        const payload = {
            description,
        }
        fetch(`https://real-plum-hare-yoke.cyclic.app/todos/update/${id}`, {
            method:"PATCH",
            body:JSON.stringify(payload),
            headers: {
              "Content-Type": "application/json",
              "Authorization":localStorage.getItem("token")
            }
          }).then(res => res.json())
          .then(res =>{
            console.log(res);
          })
          .catch(err => console.log(err))
    }
  
    console.log(id);


  return (
    <div>
       <Box p='10' m='auto' mt='10' w='50%' border='2px' borderColor='#38E54D' >
     <form action="" border='2px'>
       <Text fontSize='xl' align='left'>Username</Text>
       <Input focusBorderColor='#38E54D' placeholder='Enter username' value={ name } onChange={(e) => setName(e.target.value)} />
       <Button w='100%' colorScheme='whatsapp' mt='6' onClick = {updateName}>Update Username</Button>
       <Text fontSize='xl' align='left'>Title</Text>
       <Input focusBorderColor='#38E54D' type='text' placeholder='Enter title' value={ title } onChange={(e) => setTitle(e.target.value)}/>
       <Button w='100%' colorScheme='whatsapp' mt='6' onClick = {updateTitle}>Update Title</Button>
       <Text fontSize='xl' align='left'>Description</Text>
      <Input focusBorderColor='#38E54D' type='text' mt='6' placeholder='Enter description' value={ description } onChange={(e) => setDescription(e.target.value)}/>
      <Button w='100%' colorScheme='whatsapp' mt='6' onClick = {updateDescription}>Update Description</Button>
     </form>
       </Box>
    </div>
  )
}

export default Update

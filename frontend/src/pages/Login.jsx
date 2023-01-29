import { useState } from 'react'
import { Input, Text, Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const navigate = useNavigate();

   
  const handleSubmit = () => {
    const payload = {
      email,
      password,
    }
    fetch("https://real-plum-hare-yoke.cyclic.app//users/login", {
      method:"POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type":"application/json"
      }
      // fetch("http://localhost:8080/users/login", {
      //   method:"POST",
      //   body: JSON.stringify(payload),
      //   headers: {
      //     "Content-type":"application/json"
      //   }
    }).then(res => res.json())
    .then(res =>{
      console.log(res[0]);
      if(res.length>0) {
        console.log(res[0]);
        localStorage.setItem("token", res[0].token);
        localStorage.setItem("userName", res[0].userName);
        localStorage.setItem("userId", res[0].id);
        alert("Login Successful!");
        navigate("/");
        window.location.reload(true);
      } else {
        alert("Wrong credentials");
      }
      
    })
    .catch(err => console.log(err))
  }
    


  return (
    <div style={{ width:"40%", margin:"auto", marginTop:"20px", padding:"4px"}}>
      <Text fontSize='6xl' fontWeight='bolder' >Login Please!</Text>
      <div style={{border:"2px solid #38E54D",  margin:"auto", padding:"4px"}}>
    <div style={{border:"2px solid #38E54D",  margin:"auto", padding:"4px"}}>
    <div style={{border:"2px solid #38E54D", margin:"auto", padding:"40px"}}>
    <form action="" border='2px'>
      <Text fontSize='xl' align='left'>Email *</Text>
      <Input placeholder='Enter your email' focusBorderColor='#38E54D' value={ email } onChange={(e) => setEmail(e.target.value)} />
      <Text fontSize='xl' align='left'>Password *</Text>
      <Input type='password' focusBorderColor='#38E54D' placeholder='Enter your password' value={ password } onChange={(e) => setPassword(e.target.value)}/>
      <Button colorScheme='whatsapp' mt='6' onClick = { handleSubmit } w='100%' >Login</Button>
    </form>
  </div>
  </div>
  </div>
  </div>
  )
}

export default Login

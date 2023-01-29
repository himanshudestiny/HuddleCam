import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Input, Text, Select, Button } from '@chakra-ui/react'

const Signup = () => {
const [ userName, setUserName ] = useState("");
const [ email, setEmail ] = useState("");
const [ dob, setDob ] = useState("");
const [ role, setRole ] = useState("");
const [ location, setLocation ] = useState("");
const [ password, setPassword ] = useState("");
const [ cpassword, setCpassword ] = useState("");
const navigate = useNavigate();


const handleSubmit = () => {
  const payload = {
    userName,
    email,
    dob,
    role,
    location,
    password,
    cpassword
  }
  if(password !== cpassword) {
    alert("Password and Confirm Password did not match");
  } 
  else {
    fetch("https://real-plum-hare-yoke.cyclic.app/users/register", {
      method:"POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type":"application/json"
      }
      // fetch("http://localhost:8080/users/register", {
      //   method:"POST",
      //   body: JSON.stringify(payload),
      //   headers: {
      //     "Content-type":"application/json"
      //   }
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      if(res.length>0) {
        alert("User already registered. Please login!");
  //       setUserName("");
  // setEmail("");
  // setDob("");
  // setRole("");
  // setLocation("");
  // setPassword("");
  // setCpassword("");
  navigate("/login");
      } else {
        alert("Signup successful. Please login now!");
  //       setUserName("");
  // setEmail("");
  // setDob("");
  // setRole("");
  // setLocation("");
  // setPassword("");
  // setCpassword("");
  navigate("/login");
      }
    } 
    )
    .catch(err => console.log(err))

  }


 

  
}
  

  return (
    <div style={{border:"2px solid #38E54D", width:"40%", margin:"auto", marginTop:"0px", padding:"4px"}}>
      <div style={{border:"2px solid #38E54D", margin:"auto", padding:"4px"}}>
      <div style={{border:"2px solid #38E54D", margin:"auto", padding:"4px"}}>
    <div style={{border:"2px solid #38E54D", margin:"auto", padding:"40px"}}>
      <form action="" border='2px'>
      <Text fontSize='xl' align='left'>Username *</Text>
        <Input placeholder='Enter your username' focusBorderColor='#38E54D' color='#38E54D' value = { userName } onChange={(e) => setUserName(e.target.value) }/>
        <Text fontSize='xl' align='left'>Email *</Text>
        <Input placeholder='Enter your email' focusBorderColor='#38E54D' value = { email } onChange={(e) => setEmail(e.target.value) } />
        <Text fontSize='xl' align='left'>Date-of-birth *</Text>
        <Input
         placeholder="Select Date and Time"
         size="md"
         type="date"
         value = { dob } onChange={(e) => setDob(e.target.value) }
         focusBorderColor='#38E54D'
         />
         <Text fontSize='xl' align='left'>Role *</Text>
         <Select placeholder='Role'  focusBorderColor='#38E54D'  value = { role } onChange={(e) => setRole(e.target.value) }>
         <option value='Admin'>Admin</option>
         <option value='Explorer'>Explorer</option>
         </Select>
         <Text fontSize='xl' align='left'>Location *</Text>
        <Input  focusBorderColor='#38E54D' placeholder='Enter your location' value = { location } onChange={(e) => setLocation(e.target.value) } />
        <Text fontSize='xl' align='left'>Password *</Text>
        <Input focusBorderColor='#38E54D' type='password' placeholder='Enter your password' value = { password } onChange={(e) => setPassword(e.target.value) }  />
        <Text fontSize='xl' align='left'>Confirm Password *</Text>
        <Input focusBorderColor='#38E54D' type='password' placeholder='Confirm your password' value = { cpassword } onChange={(e) => setCpassword(e.target.value) }  />
        <Button  colorScheme='whatsapp' w='100%' mt='6' onClick = {handleSubmit}>Sign Up</Button>
      </form>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Signup



import {useContext,useRef,useEffect} from 'react'
import { Box, Grid, AspectRatio,Input,Button,FormControl,Text  } from "@chakra-ui/react";
import { FiPhoneCall } from 'react-icons/fi';
import { IoIosCall } from 'react-icons/io';
import { MdCallEnd } from 'react-icons/md';

import { SocketContext } from '../SocketContext';



const Notifications = () => {

  const { answerCall, call, name, callAccepted } = useContext(SocketContext);


  useEffect(()=> {
   
},[])



  return (
    <>  
    {call.isReceivingCall && !callAccepted && (
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop:"40px" }}>
        <h1>Incoming Call:</h1>
        <Button onClick={answerCall} bg="#38E54D">
        <FiPhoneCall size={25}/><Text>Answer</Text>          
        </Button>
        </div>
        
        )}
 
   
  
       
    </>
  )
}

export default Notifications
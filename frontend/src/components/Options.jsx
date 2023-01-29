import React, { useState, useContext,useRef,useEffect } from 'react';
import { IoIosCall } from 'react-icons/io';
import { FiPhoneCall } from 'react-icons/fi';
import { MdCallEnd } from 'react-icons/md';


import "../App.css"

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Box, Image,Input,Button,Text  } from "@chakra-ui/react";
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { SocketContext } from "../SocketContext";


const Options = ({children}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef();

    const { me, callAccepted, name, setname, callEnded, leaveCall, callUser,answerCall, call } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');
    localStorage.setItem("info", JSON.stringify(me));

    useEffect(()=> {
        setname(localStorage.getItem("userName"))
    },[setname])
    const handle = (e) => {
        callUser(idToCall)
          onOpen();
        }

        const handle1 = (e) => {
            answerCall()
              onClose();
            }
    

    return (
      <Box border="4px" height={["400px","550px","800px","800px","800px","800px"]} width="40%" mr={[3,90,90,100,250,250]} borderColor="#38E54D" borderRadius="20px" mt="10px" ml="10px" p='10'>
        {/* <Box display="flex" border="2px"> */}
        <Box>
            <Image src="https://media.tenor.com/8j63H6SfRVoAAAAM/work-from-home-wfh.gif" width={["50%","50%","50%","50%","50%","50%"]}alt="videocall" border="0px" margin="auto" ml={[10,50,75,100,120,180]} mt={10} />
        </Box>
          <form noValidate autoComplete="off">
            <Box>
              <Box>
                <h6>Account Info</h6>
                {/* <Input placeholder="Name" value={name} onChange={(e) => setname(e.target.value)}  /> */}
                <h4>Name:{localStorage.getItem("userName")}</h4>
                <CopyToClipboard text={me} >
                  <Button bg="#38E54D">
                    Copy Your ID
                  </Button>
                </CopyToClipboard>
              </Box>
              <Box >
                <h6>Make a call</h6>
                <Input placeholder="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} width="95%" />
                {callAccepted && !callEnded ? (
                  <Button  onClick={leaveCall} colorScheme="red" mt={5}>
                    <MdCallEnd size={25}/><Text pl={2}>Hang Up</Text>
                  </Button>
                ) : (
                  <Button onClick={handle} bg="#38E54D" mt={5} w={28}>
                    <IoIosCall size={25}/><Text pl={2}>Call</Text>
                  </Button>
                )}
              </Box>
            </Box>
          </form>
          {children}
        {/* </Box> */}
        <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
              >
                <AlertDialogOverlay>
                  <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                      Incoming Call
                    </AlertDialogHeader>

                    <AlertDialogBody>
                    {call.isReceivingCall && !callAccepted && (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <h1>{localStorage.getItem("userName")} is calling:</h1>
        <Button onClick={handle1}  bg="#38E54D" mb={2}>
          <FiPhoneCall size={25}/><Text pl={2}>Answer</Text>
        </Button>
        </div>
        
    )}
                    </AlertDialogBody>
                    
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
      </Box>
    );
}

export default Options
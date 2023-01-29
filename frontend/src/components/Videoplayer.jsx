import React, { useEffect } from "react";
import { Box, Grid, AspectRatio,SimpleGrid, Button  } from "@chakra-ui/react";
import { useContext } from "react";

import { SocketContext } from "../SocketContext";



const Videoplayer = () => {
  const { name, setname ,callAccepted, myVideo, userVideo, callEnded, stream, call } =useContext(SocketContext);

  const hideCam=()=> {
    const videoTrack = stream.getTracks().find(track => track.kind === 'video');
    videoTrack.enabled = false;
}

 const showCam=()=> {
    const videoTrack = stream.getTracks().find(track => track.kind === 'video');
    videoTrack.enabled = true;
}
useEffect(()=> {
    setname(localStorage.getItem("userName"))
},[setname])


  return (
    <div>
     {/* <Box  borderRadius="15"
    margin= 'auto'
    mt={25}
    display= 'flex'
    flexDirection= 'row'
    justifyContent= 'center'
    alignItems= 'center'
    width= '600px'
    border= '2px solid black'>
    <h2>Video Chat</h2>
    </Box> */}
      <SimpleGrid columns={['1','1','1','1','1','1']} mt={5} height="200px">
        {stream && (
          <Box padding="10px" border= '4px'  w={["200px","300px","300px","400px","450px","450px"]} borderColor="#38E54D" borderRadius="20px" margin="auto">
              <h5 align="left">{localStorage.getItem("userName") || "Name"}</h5>
              <video
                playsInline
                muted
                ref={myVideo}
                autoPlay
                width="100%"
              />
               <Box mt={2}>
                <Button onClick={showCam} mr={2}>Show Cam</Button>
                <Button onClick={hideCam}>Hide Cam</Button>
            </Box>
          </Box>
         
        )}
        {callAccepted && !callEnded && (
          <Box padding="10px" border= '4px solid black'  w={["200px","300px","300px","400px","450px","450px"]} borderColor="#38E54D" borderRadius="20px" margin="auto" mt={5}> 
              <h5 align="left">{localStorage.getItem("userName") ||"Name"}</h5>
              <video
                playsInline
                ref={userVideo}
                autoPlay
                width="100%"
              />
                <Box mt={2}>
                <Button onClick={showCam} mr={2}>Show Cam</Button>
                <Button onClick={hideCam}>Hide Cam</Button>
            </Box>
          </Box>
        )}
      </SimpleGrid>
      
    </div>
  );
};

export default Videoplayer
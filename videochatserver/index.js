const app =require("express")()

const server= require("http").createServer(app)
const cors = require("cors");


const io =require("socket.io")(server,{
    cors: {
        origin:"*",
        method:["GET","POST"]
    }
});

app.use(cors());
const PORT = process.env.PORT || 8080;

app.get("/", (req,res)=>{
    res.send("Welcome to the server")
});

io.on("connection",(socket)=>{
    socket.emit("me",socket.id);

    socket.on("disconnect",()=>{
        socket.broadcast.emit("callEnded");
    })

    socket.on("callUser",({userToCall,signalData,from,name})=>{
        io.to(userToCall).emit("callUser",{signal:signalData,from,name})
    })
    
    socket.on("answerCall",(data)=>{
        io.to(data.to).emit("callAccepted",data.signal)
    })

    socket.on('hide remote cam', targetId => {
        io.to(targetId).emit('hide cam');
    });

    socket.on('show remote cam', targetId => {
        io.to(targetId).emit('show cam')
    })
})


 server.listen(PORT,()=>console.log(`Server listening on ${PORT}`));
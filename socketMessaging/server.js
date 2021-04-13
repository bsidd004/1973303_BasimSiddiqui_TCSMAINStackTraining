let app=require("express")();
let http=require("http").Server(app);
let io=require("socket.io")(http);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

io.on("connection",(socket)=>{
    console.log("client connected to application...");

    socket.on("Name",(msg)=>{
        console.log("Name: "+msg);
    });
    socket.on("Message",(msg1)=>{
        console.log("Message: "+ msg1 +"\n");
    });

})

http.listen(9090,()=>console.log('server running on port number 9090'));
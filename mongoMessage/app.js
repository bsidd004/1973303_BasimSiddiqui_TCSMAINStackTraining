let app=require("express")();
let http=require("http").Server(app);
let io=require("socket.io")(http);

let obj = require("mongoose");  //load the module 
obj.Promise= global.Promise;       // creating the reference. 
let url = "mongodb://localhost:27017/meanstack";
const mongooseDbOption ={       // to avoid warning 
    useNewUrlParser: true,
    useUnifiedTopology: true
}
obj.connect(url,mongooseDbOption);   //ready to connect 
let db = obj.connection;    // connected to database. 
db.on("error",(err)=>console.log(err));


let MessageSchema=obj.Schema({
    name:String,
    message:String
});

let Message=obj.model("",MessageSchema,"Messages");
let tempName=null;
let tempMessage=null;


app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

io.on("connection",(socket)=>{
    console.log("client connected to application...");

    socket.on("Name",(msg)=>{
        console.log("Name: "+msg);
        tempName=msg;
        //saveData();
    });
    socket.on("Message",(msg1)=>{
        console.log("Message: "+ msg1 +"\n");
        tempMessage=msg1;
        //console.log(tempMessage);
        saveData();
    });

function saveData(){
       let m1=new Message({name:tempName,message:tempMessage});
        m1.save();
}


})



http.listen(9090,()=>console.log('server running on port number 9090'));
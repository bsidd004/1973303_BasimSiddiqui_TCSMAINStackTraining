let app=require("express")();
let bodyParser=require("body-parser");
let http=require("http").Server(app);
var path=require("path");
var url="mongodb://localhost:27017/meanstack";
let obj =require("mongoose");
const mongooseDbOption ={       // to avoid warning 
    useNewUrlParser: true,
    useUnifiedTopology: true
}
app.use(bodyParser.urlencoded({extended:true}));


obj.connect(url,mongooseDbOption);   //ready to connect 
let db = obj.connection;    // connected to database. 
db.on("error",(err)=>console.log(err));

let CourseSchema = obj.Schema({
    _id:Number,
    cname:String,
    desc:String,
    price:Number

});
let Course=obj.model("",CourseSchema,"Courses");


//load html initial
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})


//load html post
app.post("/add",(req,res)=>{
    var data=req.body;
    let newCourse= new Course({_id:data.cid,cname:data.cname,desc:data.desc,price:data.price});
    newCourse.save();

    //console.log(data);
    res.sendFile(__dirname+"/index.html");
})
app.post("/update",(req,res)=>{
    var data=req.body;
    //console.log(data.cid);
    Course.updateOne({_id:{$eq:data.cid}},{$set:{price:data.price}},(err,result)=> {    
        if(!err){
            if(result.nModified>0){
                console.log("Record updated")
            }else {
                console.log("Record didn't update")
            }
        }
    })

    res.sendFile(__dirname+"/index.html");
})
app.post("/delete",(req,res)=>{
    var data=req.body;
    Course.deleteOne({_id:data.cid},(err,result)=> {
        if(!err){
            //console.log(result);
            if(result.deletedCount>0){
                    console.log("Record deleted ");
            }else {
                    console.log("Record not present");
            }
        }
    });

    res.sendFile(__dirname+"/index.html");
})
app.get("/view",(req,res)=>{
    Course.find({},(err,result)=>{
        if(!err){
            res.send(result);
            //result.forEach(doc=>console.log(doc));
        }
    })
    //res.sendFile(__dirname+"/index.html");
})






http.listen(9090,()=>console.log('server running on port number 9090'));
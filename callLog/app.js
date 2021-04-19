let fs=require("fs");
let mongoose=require("mongoose");

const mongooseDbOption ={       // to avoid warning 
    useNewUrlParser: true,
    useUnifiedTopology: true
}

let url="mongodb://localhost:27017/meanstack";

var callJson;
var callString;

mongoose.connect(url,mongooseDbOption);
mongoose.Promise=global.Promise;
let db=mongoose.connection;


/*fs.readFile("call_data.json",(err,data)=> {
    if(!err){
        //console.log(data.toString());
        callString = data.toString()
        callJson = JSON.parse(callString);
    }
    for(let i=0;i<callJson.length;i++){
        console.log(callJson[i])
    }
})*/


db.on("open",()=>{

    let callLogSchema=mongoose.Schema({
        _id:Number,
        source:String,
        destination:String,
        sourceLocation:String,
        destinationLocation:String,
        callDuration:String,
        roaming:String,
        callCharge:String
    });

    let callLog=mongoose.model("",callLogSchema,"CallLog");


    fs.readFile("call_data.json",(err,data)=> {
        if(!err){
            //console.log(data.toString());
            callString = data.toString()
            callJson = JSON.parse(callString);
        }
        for(let i=0;i<callJson.length;i++){
            let call = new callLog({
                _id:callJson[i]._id,
                source:callJson[i].source,
                destination:callJson[i].destination,
                sourceLocation:callJson[i].sourceLocation,
                destinationLocation:callJson[i].destinationLocation,
                callDuration:callJson[i].callDuration,
                roaming:callJson[i].roaming,
                callCharge:callJson[i].callCharge

            });
            call.save();
           
        }
        
    })
    
})
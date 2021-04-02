let fs=require("fs");

class Logging{

}

function logger(){
    let userInput = require("readline-sync");

    let data=fs.readFileSync("log.json");

    let logArray=JSON.parse(data);
    debugger;

    let records =userInput.question("How many records do you want to add? ");
    let x = parseInt(records);
    debugger;

    for(let i=0;i<x;i++){

        var date=new Date();
        debugger;

        let fname = userInput.question("Enter your first name ");

        let lname = userInput.question("Enter you last name ");

        let email = userInput.question("Enter you email ");
        debugger;

        var record={"fname":fname,"lname":lname,"email":email, "date":date};
        //let record = new obj.log(fname,lname,email,date);

        logArray.push(record);
        debugger;
    }
    let jsonData=JSON.stringify(logArray);
    fs.writeFileSync("log.json",jsonData);
    //return jsonData;
}

module.exports={Logging,logger};
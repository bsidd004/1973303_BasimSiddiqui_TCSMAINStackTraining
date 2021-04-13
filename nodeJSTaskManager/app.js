let fs=require("fs");
let http = require("http");
let url = require("url");
let port = 9999;
var task=new Array();
let taskInfo = `<br/><br/><br/>
    <form action="/task" method="get">
    <center>
        <label>Employee ID: </label>
        <input type="text" name="empID"/><br/>
        <label>Task ID</label>
        <input type="text" name="taskID"/><br/>
        <label>Task</label>
        <input type="text" name="task"/><br/>
        <label>Date</label>
        <input type="date" name="date"/><br/>
        <input type="submit" value="Add Task!"/>
        <input type="reset" value="Reset"/>
    </center>
    </form>
    <form action="/delete" method="get">
    <center>
        <label>Task ID to Delete: </label>
        <input type="text" name="deleteID"/><br/>
        <input type="submit" value="Delete Task!"/>
        <input type="reset" value="Reset"/>
    </center>
    </form>
    <form action="/table" method="get">
    <center>
        <input type="submit" value="Create Table!"/>
    </center>
    </form>
`

let server = http.createServer((req,res)=> {

    if(req.url!="/favico.ico"){
        var pathInfo = url.parse(req.url,true).pathname;

        if(req.url=="/"){
        res.setHeader("content-type","text/html");  // by default data consider as a html 
        res.end(taskInfo);
        }
        
        else if(pathInfo=="/task"){
        var data = url.parse(req.url,true).query;
        console.log(data);
        //res.write("data is "+JSON.stringify(data));
        //var dataString=JSON.stringify(data);
        task.push(data);
        console.log(task);
        let jsonData=JSON.stringify(task);
        //res.write(JSON.stringify(task));
        fs.writeFileSync("task.json",jsonData)
        res.end(taskInfo);
        }
        
        else if(pathInfo=="/delete"){
            var remove = url.parse(req.url,true).query;
            //console.log(remove);
            let jsonList=fs.readFileSync("task.json");
            let jsonString=jsonList.toString();
            let newObj=JSON.parse(jsonString);
            for(let i=0;i<newObj.length;i++){
                if(newObj[i].taskID==remove.deleteID){
                    newObj.splice(i,1);
                    break;
                }else{console.log("does not exist")}
            }
            let newList=JSON.stringify(newObj);
            fs.writeFileSync("task.json",newList);
            //console.log(newObj);
            res.end(taskInfo);
        }

        else if(pathInfo=="/table"){
            
            var tableData=`<table border="1">
            <tr>
                <th>Employee ID</th>
                <th>Task ID</th>
                <th>Task</th>
                <th>Date</th>
            </tr>

        `;

            let jsonList=fs.readFileSync("task.json");
            let jsonString=jsonList.toString();
            let tableList=JSON.parse(jsonString);
            for(let i=0;i<tableList.length;i++){
                rowData=`
                <tr>
                <th>${tableList[i].empID}</th>
                <th>${tableList[i].taskID}</th>
                <th>${tableList[i].task}</th>
                <th>${tableList[i].date}</th>
                </tr>
                `
                tableData=tableData+rowData;
            }

            tableData=tableData+"</table>";
            res.end(tableData);
        }
    }

})



server.listen(port,()=>console.log(`running on port num ${port}`));
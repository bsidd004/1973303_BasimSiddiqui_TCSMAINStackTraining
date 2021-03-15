
function store(){
    var data = readFormData();

    sessionStorage.setItem("projData",JSON.stringify(data));
    
    console.log(sessionStorage.getItem("projData"));
}
function readFormData(){
    var obj={};
    obj.ClientName=document.getElementById("ClientName");
    obj.ProjectName=document.getElementById("ProjectName");
    obj.Budget=document.getElementById("Budget");
    return obj;
}
function createTable(){
    /*for(j=0;j<sessionStorage.length;j++){
        var obj = sessionStorage.getItem("projData" + j);
        var table = document.getElementById("budgetList");
        var body = table.getElementsByTagName("tbody")[0];
        var newrow = body.insertRow(body.length);
        var cell1=newrow.insertCell(0);
        cell1.innerHTML=obj.
    }*/
}
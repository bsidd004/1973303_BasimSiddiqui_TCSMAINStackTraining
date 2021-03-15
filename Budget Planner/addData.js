var i=0;
function store(){
    var data = readFormData();

    sessionStorage.setItem("projData"+JSON.stringify(i),JSON.stringify(data));

    console.log(sessionStorage.getItem("projData"+JSON.stringify(i)));
    i++;
    
}
function readFormData(){
    var obj={};
    obj.ClientName=document.getElementById("ClientName").value;
    obj.ProjectName=document.getElementById("ProjectName").value;
    obj.Budget=document.getElementById("Budget").value;
    return obj;
}
function createTable(){
    var sum = 0;
    for(j=0;j<sessionStorage.length;j++){
        var table = document.getElementById("budgetList");
        var body = table.getElementsByTagName("tbody")[0];
        var newrow = body.insertRow(body.length);
        var string=sessionStorage.getItem("projData"+JSON.stringify(j));
        var obj=JSON.parse(string);
        sum=parseInt(sum)+parseInt(obj.Budget);

        var cell1=newrow.insertCell(0);
        cell1.innerHTML=obj.ClientName;
        var cell2=newrow.insertCell(1);
        cell2.innerHTML=obj.ProjectName;
        var cell3=newrow.insertCell(2);
        cell3.innerHTML=obj.Budget;
    }
    document.getElementById("myText").innerHTML=sum;
}
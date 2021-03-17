var i=0;
function addBlog(){

    var data = readFormData();
    localStorage.setItem("blog"+JSON.stringify(i),JSON.stringify(data));

    console.log(localStorage.getItem("blog"+JSON.stringify(i)));
    createTable(i);
    i++;
    
}
function readFormData(){
    var obj={};
    obj.title=document.getElementById("title").value;
    obj.article=document.getElementById("article").value;
    obj.image=document.getElementById("image").value;
    return obj;
}
function createTable(j){


        var table = document.getElementById("blogTable");
        var body = table.getElementsByTagName("tbody")[0];
        var newrow = body.insertRow(body.length);
        var string=localStorage.getItem("blog"+JSON.stringify(j));
        var obj=JSON.parse(string);
 

        var cell1=newrow.insertCell(0);
        cell1.innerHTML=obj.title;
        var cell2=newrow.insertCell(1);
        cell2.innerHTML=obj.article;
        var cell3=newrow.insertCell(2);
        cell3.innerHTML=obj.image;


}

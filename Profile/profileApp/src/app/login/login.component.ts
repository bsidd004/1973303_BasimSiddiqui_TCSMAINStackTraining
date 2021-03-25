import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRef=new FormGroup({
    user:new FormControl(),
    pass:new FormControl()
  });
  msg:string="";
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  checkUser(){
    console.log(this.loginRef.value)
    let user1=this.loginRef.value.user;
    let pass1=this.loginRef.value.pass;
    let string:string=JSON.stringify(localStorage.getItem("list"));
    let list:any[]=JSON.parse(JSON.parse(string));
    console.log(list);
    for(let i=0;i<=localStorage.length;i++){
      if(user1==list[i].userName && pass1==list[i].passWord){
        window.location.href="./profile";
      }else{}
    }
    this.msg="Login Failed. Please Try Again";
  }
  register(){
    this.router.navigate(["register"]);
  }
}

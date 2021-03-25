import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

let reg:any[]=new Array;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerRef=new FormGroup({
    userName:new FormControl(),
    passWord:new FormControl()
  });
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  saveLocal(){
    //let reg:any[]=new Array;
    reg.push(this.registerRef.value);

    localStorage.setItem("list",JSON.stringify(reg));
    console.log(localStorage.getItem("list"));
  }
  login(){
    this.router.navigate(["login"]);
  }
}

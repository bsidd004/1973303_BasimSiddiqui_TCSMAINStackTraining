import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { List } from '../list.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  contactList:Array<any>=new Array();
  profileRef=new FormGroup({
    contactName:new FormControl(),
    phoneNumber:new FormControl()
  });
  constructor() { }

  ngOnInit(): void {
  }

  addToTable(){
    
    let newItem=new List(this.profileRef.value.contactName,this.profileRef.value.phoneNumber)
    this.contactList.push(newItem);
    console.log(this.contactList);
  }
}

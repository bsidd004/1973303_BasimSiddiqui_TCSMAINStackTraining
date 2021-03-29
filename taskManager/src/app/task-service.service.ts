import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(public http:HttpClient) { }
  storeTask(task:any){
    //console.log(task);
    this.http.post("http://localhost:3000/tasks",task).
    subscribe(result=>console.log(result),error=>console.log(error));
  }

  loadAllTasks():Observable<Task[]>{
    return this.http.get<Task[]>("http://localhost:3000/tasks");
  }
}

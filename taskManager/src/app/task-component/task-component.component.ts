import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.css']
})
export class TaskComponentComponent implements OnInit {

  taskArray:Array<any>=[];
  constructor(public taskSer:TaskServiceService) { }

  ngOnInit(): void {
    //this.taskSer.loadAllTasks().subscribe(results=>this.taskArray.push(results));
    //console.log(this.taskArray);
    this.loadTasks();
  }

  storeNewTask(taskRef:any){
    console.log(taskRef);
    this.taskSer.storeTask(taskRef);
  }
  loadTasks(){
    this.taskSer.loadAllTasks().subscribe(results=>this.taskArray=results);
    console.log(this.taskArray);
  }
}

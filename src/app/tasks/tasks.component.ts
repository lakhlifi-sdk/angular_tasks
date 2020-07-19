import { Component, OnInit } from '@angular/core';
import {TaskService} from '../services/task.service';
import {Task} from '../models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

tasks:Task[]=[];
myTasks:Task={
  label:'',
  completed:false
}

  constructor( private taskService:TaskService) { }

  ngOnInit(): void {
  this.getTasks();
  }
 getTasks(){
 this.taskService.findAll().subscribe(tasks=> this.tasks=tasks);
 }

 deleteTask(id){
 this.taskService.delete(id)
 .subscribe(()=>{
 this.tasks=this.tasks.filter(task=>task.id !=id)
 })
 }
 persistTask(){
   this.taskService.persist(this.myTasks)
      .subscribe((task)=>{
      this.tasks=[task, ...this.tasks];
        this.rest();
    })

 }
 rest(){
  this.myTasks={
    label:'',
    completed:false
   }
 }
}

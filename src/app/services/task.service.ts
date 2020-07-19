import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http'
import {Task} from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor( private http:HttpClient) { }

  findAll(){
   return this.http.get<Task[]>('http://localhost:3000/tasks')
  }
  delete(id){
  return this.http.delete("http://localhost:3000/tasks/"+id);
  }
  persist(task){
   return this.http.post<Task>("http://localhost:3000/tasks/", task)
  }
}

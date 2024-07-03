import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule, NgFor } from '@angular/common';
import { taskList } from './type';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
list:taskList[]=[]
makelist(data:string):void{
  this.list.push({id:this.list.length+1,data});
}
removeList(id:number){
  console.log(id);
 
  this.list=this.list.filter(item=>item.id!=id)
  console.log(this.list);
}
}

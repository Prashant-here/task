import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { loginForm } from './type';
import { signupForm } from './type';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormsModule,CommonModule,MatButtonModule,TaskListComponent],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
  
})


export class RegisterFormComponent {
  loginsuccess:boolean=false
 name:string='Welcome to the Website'; 
 signup:boolean=false;
 signin:boolean=false;
 handlesignup(){
  this.signup=true;
  this.signin=false;
 }
 handlesignin(){
  this.signin=true;
  this.signup=false;
 }
 handlelogout(){
  this.loginsuccess=false;
 }
 list:signupForm[]=[] 
 flag:boolean=false;
 getData(data:signupForm){
  console.log(data);
  this.list.push(data);
  alert("Account Successfully Created");
  
 }
 checkData(data: signupForm) {
  
  console.log(data.username);
  console.log(data.password);
  let username:string =data.username;
  let password:string =data.password;
  
  this.list.forEach((user: any) => {
    if (user.username == username && user.password == password) {
      this.flag = true;
    }
  });
 
  
 
 console.log(this.flag);
  
  if (this.flag) {
    console.log('User authenticated successfully');
    this.name=username
    this.loginsuccess=true;
    this.signin=false;
    this.signup=false;
    alert("Login Successfully")
  } else {
    console.log('Authentication failed');
    alert("Invalid Username and Password");
  }
}

}

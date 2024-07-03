import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './user-auth/login/login.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserListComponent,LoginComponent,RegisterFormComponent,TaskListComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog';
  display:string=''
  getData(name:string):void {
    console.log(name);
    this.display=name;
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component' //LOGIN
import {AdminComponent} from './admin/admin.component' //ADMIN
import {EmpleadoComponent} from './empleado/empleado.component' //Empleado

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, AdminComponent,EmpleadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppVacaciones';
}

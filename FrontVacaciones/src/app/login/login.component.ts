import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService: AuthService) { }

  onSubmit(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;

    this.authService.login(username, password).subscribe(
      (isLoggedIn) => {
        if (isLoggedIn) {
          console.log('Inicio de sesión exitoso');
          // Redirigir o hacer algo después de un login exitoso
        }
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
      }
    );
  }
}

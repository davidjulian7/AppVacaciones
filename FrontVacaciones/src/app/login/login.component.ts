import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private authService: AuthService) { }

  onSubmit(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;

    this.authService.login(username, password).subscribe({
      next: (isLoggedIn) => {
        if (isLoggedIn) {
          console.log('Inicio de sesión exitoso');
          // Redirigir o hacer algo después de un login exitoso
        }
      },
      error: (error) => {
        console.error('Error al iniciar sesión:', error);
      }
    });
  }
}

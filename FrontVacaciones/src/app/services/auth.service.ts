import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { provideHttpClient, withInterceptorsFromDi, withFetch } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    // Aquí puedes hacer la llamada HTTP para autenticar al usuario
    // Por ejemplo:
    // return this.http.post<boolean>('url_del_api/login', { username, password });
    // Simulación:
    return new Observable<boolean>((observer) => {
      setTimeout(() => {
        if (username === 'testuser' && password === 'password123') {
          observer.next(true);
          observer.complete();
        } else {
          observer.error('Credenciales inválidas');
        }
      }, 1000);
    });
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(username: string, password: string): Observable<boolean> {
    // Simular una respuesta de un servidor
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

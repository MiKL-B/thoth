import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
interface User {
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private apiURL = 'http://localhost:3000/api';
  createUser(user: User) {
    this.http
      .post(this.apiURL + '/user', user, { responseType: 'text' })
      .subscribe({
        next: (res) => console.log('Auth-service frontend:', res),
        error: (err) => console.error('Erreur :', err),
      });
  }
}

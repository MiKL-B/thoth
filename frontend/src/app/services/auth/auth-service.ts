import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../../models/user/user';
import { Observable, tap } from 'rxjs';

type AuthResponse = {
  token: string;
};

type AuthLoginPayload = {
  email: string;
  password: string;
  remember: boolean;
};

type AuthRegisterPayload = {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private apiURL = 'http://localhost:3000/auth';
  isAuthenticated: boolean = false;
  token = signal('');

  login(user: User) {
    this.http
      .post(this.apiURL + '/login', user, { responseType: 'text' })
      .subscribe({
        next: (res) => console.log('Auth-service frontend:', res),
        error: (err) => console.error('Erreur :', err),
      });
    this.isAuthenticated = true;
  }

  register(user: User) {
    this.http
      .post(this.apiURL + '/register', user, { responseType: 'text' })
      .subscribe({
        next: (res) => console.log('Auth-service frontend:', res),
        error: (err) => console.error('Erreur :', err),
      });
  }
  logout() {
    this.isAuthenticated = false;
  }
}

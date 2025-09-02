import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginPayload, RegisterPayload } from '../models/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "http://localhost:8080/api/auth";

  constructor(private http: HttpClient) { }
  login(data: LoginPayload): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }
  register(data: RegisterPayload): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data)
  }
}

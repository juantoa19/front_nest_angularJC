import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl= "http://jsonplaceholder.typicode.com";
  
  constructor(private http: HttpClient) {}

  loginConNest(credenciales: any) {
    return this.http.get<any>(`${this.baseUrl}/todos`, credenciales);
  }

  registroConNest(datos: any) {
    return this.http.post<any>(`${this.baseUrl}/register`, datos);
  }
}

import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private baseUrl = environment.urlServidor
  private http = inject(HttpClient)

  funListar() {
    return this.http.get(`${this.baseUrl}/libro/back`,{headers:{'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhc2ExNEBnbWFpbC5jb20iLCJpZCI6MSwiaWF0IjoxNzE4NTk1NjUzLCJleHAiOjE3MTg1OTYyNTh9.cGxf2ZsMPpeimIFD7LtPEMYyAb4gkcdyyGPaBhITB1I'}})
  }

}

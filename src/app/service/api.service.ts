import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginI } from '../modelos/login.interface';
import { ResponseI } from '../modelos/response.interface';
import { RegisterI } from '../modelos/register.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


    private url = 'http://localhost:8081/auth/';


  constructor(private http: HttpClient) { }

  Register(form:RegisterI): Observable<ResponseI> {
    let urlRegister = this.url + "register"
    return this.http.post<ResponseI>(urlRegister, form);
  }

  Login(form:LoginI): Observable<ResponseI> {
    let urlLogin = this.url + "login"
    return this.http.post<ResponseI>(urlLogin, form);
  }
}

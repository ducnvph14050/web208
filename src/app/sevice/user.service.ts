import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../model/Products';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  register(users:any):Observable<IUser>{
    // return data.find(item => item.id == id)
    return this.http.post<IUser>(`${this.API_URL}/signup`,users)
  }

  login(users:any):Observable<IUser>{
    
      return this.http.post<IUser>(`${this.API_URL}/signin`,users)
    
  }
}

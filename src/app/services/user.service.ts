import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private _httpClient: HttpClient) { }

  createUser(user: any): Observable<any> {
    return this._httpClient.post(`${ environment.urlBackEnd}/users`, user);
  }

  getAllUsers(){
    return this._httpClient.get(`${ environment.urlBackEnd}/users`);

  }
  
  getUserById(id:number){
    return this._httpClient.get(`${ environment.urlBackEnd}/users/${id}`);

  }

  deleteUser(id:number): Observable<any> {
    return this._httpClient.delete(`${ environment.urlBackEnd}/users/${id}`);
  }

  updateUser(id: number, user: any): Observable<any> {
    return this._httpClient.put(`${environment.urlBackEnd}/users/${id}`, user);
  }
  


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

   }

   fetchUsers(){
     return this.http.get<User[]>('https://jsonplaceholder.typicode.com/todos');
   }

   deleteUser(id: number){
     return this.http.delete('https://jsonplaceholder.typicode.com/todos/'+id);
   }

   addUser(payload: User){
     return this.http.post<User>('https://jsonplaceholder.typicode.com/todos', payload);
   }

   updateUser(payload: User, id: number){
      return this.http.put<User>('https://jsonplaceholder.typicode.com/todos' + id, payload);

   }
}

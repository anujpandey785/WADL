import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser!:User;
  users!:User[];
  readonly baseURL="http://localhost:3000/users";

  constructor(public http:HttpClient) { 
    
  }
  postUser(user:User){
    return this.http.post(this.baseURL,user);

  }
  getUserList() {
    return this.http.get(this.baseURL);
  }

  putUser(emp: User) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteUser(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}

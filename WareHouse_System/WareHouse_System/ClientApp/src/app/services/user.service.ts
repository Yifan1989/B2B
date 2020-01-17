import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor() {
        
    }

    public authUser(userToAuth: User): void {
        console.log(111);
    }
  
}

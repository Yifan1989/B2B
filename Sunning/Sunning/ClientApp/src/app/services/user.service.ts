import { Injectable } from '@angular/core';
import { User } from '../models/user';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    private baseUrl = "https://logtagonline.com/api/users/token";

    constructor() {
        
    }

    public authUser(userToAuth: User): void {
        // post here and return observable, need to fix return value here
        // subscribe the return observable in the component
    }
  
}

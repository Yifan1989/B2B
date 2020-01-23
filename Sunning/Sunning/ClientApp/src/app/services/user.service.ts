import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
//import { HttpClient } from 'selenium-webdriver/http';
import { Observable, BehaviorSubject, Subject } from '../../../node_modules/rxjs';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    public logInAndCreateUser = new BehaviorSubject<boolean>(true);
    public check = new BehaviorSubject<boolean>(true);

    private baseUrl = "https://83eec039-7434-489e-934b-02d43374e57c.mock.pstmn.io";
    constructor(private http: HttpClient) {
        
    }

    public authUser(): void {
        this.http.get(this.baseUrl + '/stuff/?id=123').subscribe((response) => {
            console.log(response['id']);
            console.log(response['name']);
        });
    }
  
}

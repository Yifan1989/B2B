import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
//import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from '../../../node_modules/rxjs';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    private baseUrl = "https://83eec039-7434-489e-934b-02d43374e57c.mock.pstmn.io";

    constructor(private http: HttpClient) {
        
    }

    public authUser(): void {
        // post here and return observable, need to fix return value here
        // subscribe the return observable in the component
        this.http.get(this.baseUrl + '/stuff/?id=123').subscribe((response) => {
            console.log(response);
        });

    }
  
}

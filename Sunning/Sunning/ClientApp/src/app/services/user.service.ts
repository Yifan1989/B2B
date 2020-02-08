import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
//import { HttpClient } from 'selenium-webdriver/http';
import { Observable, BehaviorSubject, Subject } from '../../../node_modules/rxjs';
import { forEach } from '../../../node_modules/@angular/router/src/utils/collection';


@Injectable({
    providedIn: 'root'
})

export class UserService {
    public logIn = new BehaviorSubject<boolean>(true);
    public logInStatus = this.logIn.asObservable();

    public newUser = new BehaviorSubject<boolean>(false);
    public newUserStatus = this.newUser.asObservable();

    public showDashBoard = new BehaviorSubject<boolean>(false);
    public showDashBoardStatus = this.showDashBoard.asObservable();

    public logInData: User[];

    private baseUrl = "https://83eec039-7434-489e-934b-02d43374e57c.mock.pstmn.io";
    constructor(private http: HttpClient) {
        
    }

    public authUser(): void {
        /*
        this.http.get(this.baseUrl + '/stuff/?id=123').subscribe((response) => {
            console.log(response['id']);
            console.log(response['name']);
            });
        */
    }

    public getUsers(): void {
        let url = "https://localhost:5001/api/Login";
        this.http.get(url)
            .subscribe((res: Response) => {
            
            console.log(res);
        });
    }
}

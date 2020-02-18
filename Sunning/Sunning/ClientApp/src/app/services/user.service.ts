import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { HttpClient } from 'selenium-webdriver/http';
import { Observable, BehaviorSubject, Subject } from '../../../node_modules/rxjs';
import { forEach } from '../../../node_modules/@angular/router/src/utils/collection';
import { map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


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

    public userLoggedIn = new BehaviorSubject<boolean>(false);
    public userLoggedInStatus = this.userLoggedIn.asObservable();

    public logInData: User[];
    private baseUrl: string = "https://localhost:5001/api/Login";
    private sampleUrl = "https://83eec039-7434-489e-934b-02d43374e57c.mock.pstmn.io";
    constructor(private http: HttpClient) {
        
    }

    public authUser(loginUser: User): void {
        let url = this.baseUrl + "/" + loginUser.user;
        this.http.post<string>(url, loginUser).subscribe(response => {
            console.log(response);
            if (response === "true") {
                this.userLoggedIn.next(true);
                this.showDashBoard.next(true);
                this.logIn.next(false);
                this.newUser.next(false);
            }
        });
    }

    public getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.baseUrl);
    }

    public addUser(newUser: User): void {
        this.http.post<User>(this.baseUrl, newUser).subscribe();
    }
}

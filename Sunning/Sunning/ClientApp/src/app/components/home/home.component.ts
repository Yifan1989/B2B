import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { BehaviorSubject, Subject } from '../../../../node_modules/rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit{
    
    private loginForm = new FormGroup({
        userEmail: new FormControl(''),
        passWord: new FormControl(''),
    });
    
    private showLogin: boolean = true;
    private userLoggedIn: boolean = false;
    private failedLoggedIn: boolean;

    constructor(private userService: UserService) {
        this.userService.logInStatus.subscribe(value => this.showLogin = value);
        this.userService.userLoggedInStatus.subscribe(value => this.userLoggedIn = value);
        this.userService.failLoggedInStatus.subscribe(value => this.failedLoggedIn = value);
    }
    
    ngOnInit() {

    }

    ngAfterViewInit() {
        if (this.failedLoggedIn) {
            console.log("mememe");
        }
    }

    private confirmLogin(): void {
        let email = this.loginForm.value.userEmail;
        let passWd = this.loginForm.value.passWord;
        let authUser: User = {
            user: email,
            passwd: passWd
        }
        //console.log(authUser.email, authUser.password);
        this.userService.authUser(authUser);
    }

    private signUp(): void {
        this.userService.logIn.next(false);
        this.userService.newUser.next(true);
    }
}




import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { BehaviorSubject, Subject } from '../../../../node_modules/rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    
    private loginForm = new FormGroup({
        userEmail: new FormControl(''),
        passWord: new FormControl(''),
    });
    
    private showLogin: boolean = true;
    private userLoggedIn: boolean = false;

    constructor(private userService: UserService) {
        this.userService.logInStatus.subscribe(value => this.showLogin = value);
        this.userService.userLoggedInStatus.subscribe(value => this.userLoggedIn = value);
    }

    ngOninit(): void {

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

        /*
        if (this.userLoggedIn) {
            this.userService.showDashBoard.next(true);
            this.userService.logIn.next(false);
            this.userService.newUser.next(false);
        }
        */
    }

    private signUp(): void {
        /*
        let abs = new BehaviorSubject<boolean>(true);
        abs.subscribe(value => console.log(value));
        abs.next(false);
        this.showLogin = abs.getValue();
        */
        this.userService.logIn.next(false);
        this.userService.newUser.next(true);
        //this.showLogin = this.userService.logIn.getValue();
    }
}




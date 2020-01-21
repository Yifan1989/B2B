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

    private showLogin: boolean = true; 
    private loginForm = new FormGroup({
        userEmail: new FormControl(''),
        passWord: new FormControl(''),
    });
        
    constructor(private userService: UserService) { }

    ngOninit(): void {}
    
    private confirmLogin(): void {

        let email = this.loginForm.value.userEmail;
        let passWd = this.loginForm.value.passWord;

        let authUser: User = {
            email: email,
            password: passWd
        }
        //console.log(authUser.email, authUser.password);
        this.userService.authUser();
    }

    private signUp(): void {
        let abs = new BehaviorSubject<boolean>(true);
        abs.subscribe(value => console.log(value));
        abs.next(false);
        this.showLogin = abs.getValue();
    }
}




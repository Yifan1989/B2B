import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

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

    constructor() { }

    ngOninit(): void {}



    private confirmLogin(): void {
        let userEmail = this.loginForm.value.userEmail;
        let passWord = this.loginForm.value.passWord;

        let auth_user: User = {
            email: userEmail,
            password: passWord
        }
        //console.log(123);
    }

}

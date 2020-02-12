import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormGroup, FormControl, FormBuilder } from '../../../../node_modules/@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
    private checkCreateUser: boolean = false;

    private newUserForm = new FormGroup({
        user: new FormControl(''),
        passwd: new FormControl(''),
    });

    constructor(private userService: UserService) {
        this.userService.newUserStatus.subscribe(value => this.checkCreateUser = value);
    }

    ngOnInit() {

    }

    private createNewUser(): void {
        let user = this.newUserForm.value.user;
        let passwd = this.newUserForm.value.passwd;
        let newUser: User = {
            user: user,
            passwd: passwd
        }
        this.userService.addUser(newUser);
        //console.log(user, passwd);
    }

    private backToHome(): void {
        this.userService.newUser.next(false);
        this.userService.logIn.next(true);
    }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormGroup } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
    private checkCreateUser: boolean = false;

    private newUserForm: FormGroup;

    constructor(private userService: UserService) {
        this.userService.newUserStatus.subscribe(value => this.checkCreateUser = value);
    }

    ngOnInit() {

    }

    private createNewUser(): void {

    }

    private backToHome(): void {
        this.userService.newUser.next(false);
        this.userService.logIn.next(true);
    }
}

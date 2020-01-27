import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    private checkCreateUser: boolean = false;

    constructor(private userService: UserService) {

    }

    ngOnInit() {
        this.userService.newUserStatus.subscribe(value => this.checkCreateUser = value);
    }
    
    private backToHome(): void {
        this.userService.newUser.next(false);
        //this.userService.logIn.next(false);
    }
}

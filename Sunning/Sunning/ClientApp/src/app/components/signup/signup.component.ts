import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    private checkCreateUser: boolean;

    constructor(private userService: UserService) { }

    ngOnInit() {}
    
    private backToHome(): void { }

}

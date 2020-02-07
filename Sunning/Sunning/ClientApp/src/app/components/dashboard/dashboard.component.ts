import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    private showDashBoard: boolean = false;
    constructor(private userService: UserService) {
        this.userService.showDashBoardStatus.subscribe(value => this.showDashBoard = value);
    }
    
    ngOnInit() {
    }

    private backHome(): void {
        this.userService.showDashBoard.next(false);
        this.userService.logIn.next(true);
        this.userService.newUser.next(false);
    }

    private showUsers(): void {

    }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable, BehaviorSubject } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    private showDashBoard: boolean = false;
    private showUsersButton: boolean = false;
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

    private loadUsers(): void {
        //this.curLogins = this.userService.getUsers();
        this.showUsersButton = true;
    }

    private showUsers(): void {
        console.log();
    }

}

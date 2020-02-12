import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable, BehaviorSubject } from '../../../../node_modules/rxjs';
import { User } from '../../models/user';

import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';

import { WarehouseComponent } from '../../components/warehouse/warehouse.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    private curUsers: User[];
    private showUsers: boolean = false;
    private showDashBoard: boolean = false;

    private modalRef: BsModalRef;

    @ViewChild(WarehouseComponent)
    private warehouse: WarehouseComponent;

    constructor(private userService: UserService,
                private modalService: BsModalService) {
        this.userService.showDashBoardStatus.subscribe(value => this.showDashBoard = value);
    }
    
    ngOnInit() {
    }

    private backHome(): void {
        this.userService.showDashBoard.next(false);
        this.userService.logIn.next(true);
        this.userService.newUser.next(false);
        this.showUsers = false;
    }

    private loadUsers(): void {
        this.userService.getUsers().subscribe(users => this.curUsers = users);
        this.showUsers = true;
    }
    /*
    private createNewWarehouse(template: TemplateRef<any>): void {
        this.modalRef = this.modalService.show(template);
    }
    */

    private createNewWarehouse(template: TemplateRef<any>): void {
        this.modalRef = this.modalService.show(this.warehouse.elTemplate);
        //console.log(this.warehouse);
    }
}

import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable, BehaviorSubject } from '../../../../node_modules/rxjs';
import { User } from '../../models/user';
import { Warehouse } from '../../models/warehouse';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';

import { WarehouseComponent } from '../../components/warehouse/warehouse.component';
import { EditWarehouseComponent } from '../../components/edit-warehouse/edit-warehouse.component';
import { WarehouseService } from '../../services/warehouse.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    private curUsers: User[];
    private curWareHouses: Warehouse[];
    private showUsers: boolean = false;
    private showDashBoard: boolean = false;

    public modalRef: BsModalRef;

    @ViewChild(WarehouseComponent)
    private warehouse: WarehouseComponent;

    @ViewChild(EditWarehouseComponent)
    private editWarehouse: EditWarehouseComponent;

    constructor(private userService: UserService,
        private modalService: BsModalService,
        private warehouseService: WarehouseService)
    {
        this.userService.showDashBoardStatus.subscribe(value => this.showDashBoard = value);
        this.warehouseService.getWareHouses().subscribe(warehouses => this.curWareHouses = warehouses);
    }
    
    ngOnInit() {
    }

    private backHome(): void {
        this.userService.showDashBoard.next(false);
        this.userService.logIn.next(true);
        this.userService.newUser.next(false);
        this.userService.navBar.next(false);
        this.showUsers = false;
    }

    private loadUsers(): void {
        this.userService.getUsers().subscribe(users => this.curUsers = users);
        this.showUsers = true;
    }

    private createNewWarehouse(template: TemplateRef<any>): void {
        this.warehouseService.toEditSelectedWareHouse.next(false);
        this.modalRef = this.modalService.show(this.warehouse.warehouseTemplate);
    }

    private toEditWarehouse(template: TemplateRef<any>, selectedWarehouse: Warehouse): void {
        this.warehouseService.selectedWareHouse.next(selectedWarehouse);
        this.warehouseService.setSelectedWareHouse();
        //this.warehouseService.toEditSelectedWareHouse.next(true);
        this.modalRef = this.modalService.show(this.editWarehouse.editWarehouseTemplate);
    }
}

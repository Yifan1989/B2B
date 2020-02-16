import { Component, OnInit, TemplateRef, ViewChild, ElementRef,Output, EventEmitter, AfterViewInit, AfterViewChecked } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, FormBuilder } from '../../../../node_modules/@angular/forms';
import { Warehouse } from '../../models/warehouse';
import { WarehouseService } from '../../services/warehouse.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-warehouse',
  templateUrl: './edit-warehouse.component.html',
  styleUrls: ['./edit-warehouse.component.css']
})
export class EditWarehouseComponent implements OnInit, AfterViewInit, AfterViewChecked {

    @ViewChild('editWarehouseTemplate')
    public editWarehouseTemplate: ElementRef;

    @Output() onHide = new EventEmitter<void>();


    private editWareHouseForm = new FormGroup({
        name: new FormControl(''),
        address: new FormControl(''),
        owner: new FormControl(''),
        comment: new FormControl(''),
    });

    constructor(public warehouseService: WarehouseService) { }

    ngOnInit() {
        this.warehouseService.editWarehouseForm.next(this.editWareHouseForm);
    }

    ngAfterViewInit() {

    }

    ngAfterViewChecked() {

    }

    private changeWarehouse(): void {
        let newWareHouse = new Warehouse();
        newWareHouse.id = this.warehouseService.selectedWareHouse.getValue().id;
        newWareHouse.name = this.editWareHouseForm.value.name;
        newWareHouse.owner = this.editWareHouseForm.value.owner;
        newWareHouse.address = this.editWareHouseForm.value.address;
        newWareHouse.comment = this.editWareHouseForm.value.comment;
        this.warehouseService.editWarehouse(newWareHouse);
    }

    private closeDialog(): void {

    }
}

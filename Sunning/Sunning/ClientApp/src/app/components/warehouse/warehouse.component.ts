import { Component, OnInit, TemplateRef, ViewChild, ElementRef,Output, EventEmitter, AfterViewInit, AfterViewChecked } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, FormBuilder } from '../../../../node_modules/@angular/forms';
import { Warehouse } from '../../models/warehouse';
import { WarehouseService } from '../../services/warehouse.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit, AfterViewInit, AfterViewChecked{
    @ViewChild('warehouseTemplate')
    public warehouseTemplate: ElementRef;

    @Output() onHide = new EventEmitter<void>();

    // needs to add into provider in app.module.ts file
    private wareHouseForm = new FormGroup({
        name: new FormControl(''),
        address: new FormControl(''),
        owner: new FormControl(''),
        comment: new FormControl(''),
    });

    private toOpenEditWareHouse: boolean = false;

    constructor(public userService: UserService,
        public modalService: BsModalService,
        public warehouseService: WarehouseService) {
    }

    ngOnInit() {
        console.log("123");
    }

    ngAfterViewInit() {

    }
    //this is super useful
    ngAfterViewChecked() {
        /*
        this.warehouseService.toEditWareHouseStatus.subscribe(value => this.toOpenEditWareHouse = value);
        if (this.toOpenEditWareHouse) {
            this.wareHouseForm.setValue({
                name: this.warehouseService.selectedWareHouse.getValue().name,
                address: this.warehouseService.selectedWareHouse.getValue().address,
                owner: this.warehouseService.selectedWareHouse.getValue().owner,
                comment: this.warehouseService.selectedWareHouse.getValue().comment
            });
        } else {
            this.wareHouseForm.reset();
            }
        */
    }

    private postNewWarehouse(): void {
        let newWareHouse = new Warehouse();
        newWareHouse.name = this.wareHouseForm.value.name;
        newWareHouse.owner = this.wareHouseForm.value.owner;
        newWareHouse.address = this.wareHouseForm.value.address;
        newWareHouse.comment = this.wareHouseForm.value.comment;
        this.warehouseService.createNewWarehouse(newWareHouse);
    }

    private closeWarehouse(): void {
        //this.modalRef = this.modalService.show(this.warehouseTemplate);
        //this.modalRef.hide();
        console.log(this.warehouseService.selectedWareHouse.getValue());
    }
}

import { Component, OnInit, TemplateRef, ViewChild, ElementRef,Output, EventEmitter, AfterViewInit, AfterViewChecked } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, FormBuilder } from '../../../../node_modules/@angular/forms';
import { Warehouse } from '../../models/warehouse';
import { WarehouseService } from '../../services/warehouse.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit, AfterViewInit, AfterViewChecked {
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

    constructor(private modalService: BsModalService,
                public modalRef: BsModalRef,
                private wareHouseService: WarehouseService
    ){
        //this.wareHouseService.toEditWareHouseStatus.subscribe(value => this.toOpenEditWareHouse = value);
    }

    ngOnInit() {

    }

    ngAfterViewInit() {

    }


    //this is super useful
    ngAfterViewChecked() {
        this.wareHouseService.toEditWareHouseStatus.subscribe(value => this.toOpenEditWareHouse = value);
        if (this.toOpenEditWareHouse) {
            this.wareHouseForm.setValue({
                name: this.wareHouseService.selectedWareHouse.getValue().name,
                address: this.wareHouseService.selectedWareHouse.getValue().address,
                owner: this.wareHouseService.selectedWareHouse.getValue().owner,
                comment: this.wareHouseService.selectedWareHouse.getValue().comment
            });
        } else {
            this.wareHouseForm.reset();
        }
    }

    /*
    this.wareHouseForm.setValue({
            name: this.wareHouseService.selectedWareHouse.getValue().name,
            address: this.wareHouseService.selectedWareHouse.getValue().address,
            owner: this.wareHouseService.selectedWareHouse.getValue().owner,
            comment: this.wareHouseService.selectedWareHouse.getValue().comment
            });
    */
    
    private doHide(): void {
        this.modalRef.hide();
    }

    private createNewWarehouse(): void {
        let newWareHouse = new Warehouse();
        newWareHouse.name = this.wareHouseForm.value.name;
        newWareHouse.owner = this.wareHouseForm.value.owner;
        newWareHouse.address = this.wareHouseForm.value.address;
        newWareHouse.comment = this.wareHouseForm.value.comment;
        this.wareHouseService.createNewWarehouse(newWareHouse);
    }

    private closeWarehouse(): void {
        console.log(this.wareHouseService.selectedWareHouse.getValue());
    }
}

import { Component, OnInit, TemplateRef, ViewChild, ElementRef,Output, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, FormBuilder } from '../../../../node_modules/@angular/forms';
import { Warehouse } from '../../models/warehouse';
import { WarehouseService } from '../../services/warehouse.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
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

    constructor(private modalService: BsModalService,
                public modalRef: BsModalRef,
                private wareHouseService: WarehouseService
                ) { }

    ngOnInit() {

    }
    
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

    }
}

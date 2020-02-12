import { Component, OnInit, TemplateRef, ViewChild, ElementRef,Output, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
    @ViewChild('warehouseTemplate')
    public warehouseTemplate: ElementRef;

   
    //private modalRef: BsModalRef;
    @Output() onHide = new EventEmitter<void>();

    // needs to add into provider in app.module.ts file
    constructor(private modalService: BsModalService,
                public modalRef: BsModalRef) { }

    ngOnInit() {

    }

    
    private doHide(): void {
        this.modalRef.hide();
    }
    
}

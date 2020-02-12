import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
    @ViewChild('template')
    public elTemplate: ElementRef;

   
    private modalRef: BsModalRef;

    constructor(private modalService: BsModalService) {}

    ngOnInit() {

    }


}

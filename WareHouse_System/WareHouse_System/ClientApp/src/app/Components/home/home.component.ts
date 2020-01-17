import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    private loginForm = new FormGroup({
        userName: new FormControl(''),
        passWord: new FormControl(''),
    });

    constructor() { }

    ngOninit(): void {}



    private confirmLogin(): void {

    }

}

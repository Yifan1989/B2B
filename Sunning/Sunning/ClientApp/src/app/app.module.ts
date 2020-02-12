import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
//import { HttpClient } from 'selenium-webdriver/http';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent ,
    DashboardComponent ,
    WarehouseComponent],
  imports: [
      ModalModule.forRoot(),
      BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
    ])
  ],
  providers: [BsModalRef],
  bootstrap: [AppComponent],
  entryComponents: [WarehouseComponent]
})
export class AppModule { }

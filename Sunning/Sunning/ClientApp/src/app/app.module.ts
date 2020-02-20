import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//import { HttpClient } from 'selenium-webdriver/http';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { EditWarehouseComponent } from './components/edit-warehouse/edit-warehouse.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ShipmentsComponent } from './components/shipments/shipments.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';


const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'shipments', component: ShipmentsComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: '', component: HomeComponent }
];
    
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent ,
    DashboardComponent ,
    WarehouseComponent,
    EditWarehouseComponent,
    NavbarComponent,
    ShipmentsComponent,
    ProductsComponent,
    ContactComponent],
  imports: [
      ModalModule.forRoot(),
      BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes,
          { enableTracing: true }
      )
  ],
  providers: [BsModalRef],
  bootstrap: [AppComponent],
  entryComponents: [WarehouseComponent]
})
export class AppModule { }

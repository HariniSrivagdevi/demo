import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyServiceService } from './my-service.service';
import { OnlinelinkComponent } from './onlinelink/onlinelink.component';
import { OnlineserviceService } from './onlineservice.service';
import { OrderbyPipe } from './orderby.pipe';
// import { SearchComponent } from './employee-add/employee-add.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeAddComponent,
    EmployeeListComponent,
    OnlinelinkComponent,
    OrderbyPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient,MyServiceService,OnlineserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

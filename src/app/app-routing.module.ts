import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { OnlinelinkComponent } from './onlinelink/onlinelink.component';
// import { SearchComponent } from './employee-add/employee-add.component';


const routes: Routes = [
  {
    path:'app-employee-add',
    component : EmployeeAddComponent
  },
  {
    path:'app-employee-list',
    component : EmployeeListComponent
  },
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

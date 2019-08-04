import { Component, OnInit } from '@angular/core';
import { Products, MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  createdEmployee:Products;
products:Products[];
  
  service:MyServiceService;

  constructor(service:MyServiceService) 
  {
    this.service=service;
  }

  ngOnInit() {
  }

  search(data:any){
   this.products=this.service.search(data);
   }
}

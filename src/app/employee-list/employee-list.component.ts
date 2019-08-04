import { Component, OnInit } from '@angular/core';
import { MyServiceService, Products } from '../my-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {

  service:MyServiceService;
  constructor(service:MyServiceService) { 
    this.service=service;
  }

  products:Products[]=[];
  

  delete(pid:number)
  {
    this.service.delete(pid);
    this.products=this.service.getProducts();
  }

  isUpdate:boolean=true;
  updateData()
  {
    this.isUpdate=!this.isUpdate;
  }
  update(data:any)
  {
    this.service.update(data);
    this.products=this.service.getProducts();
  }

  column:string="pid"; 
  order:boolean=true;

  sort(column:string)
  {    
    if(this.column==column )
    {
      this.order=!this.order;
    }
    else
    {
      this.order=true;
      this.column=column;
    }
  }
  
  ngOnInit() {
    this.service.fetchDetails();
    this.products=this.service.getProducts();
  }

  
}

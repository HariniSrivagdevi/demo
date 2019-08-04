import { Component, OnInit } from '@angular/core';
import { OnlineserviceService } from '../onlineservice.service';
import { Employee } from '../onlineservice.service';

@Component({
  selector: 'app-onlinelink',
  templateUrl: './onlinelink.component.html',
  styleUrls: ['./onlinelink.component.css']
})
export class OnlinelinkComponent implements OnInit {

  service:OnlineserviceService;
  constructor(service:OnlineserviceService) { 
    this.service=service;
  }
  employees:Employee[]=[]
  ngOnInit() 
  {
    this.service.fetchEmployees();
    this.employees=this.service.getEmployees();
  }

}

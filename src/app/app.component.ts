import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing';

  /*service:MyServiceService;
  router:Router;

  constructor(service:MyServiceService,router:Router){
    this.service=service;
    this.router=router;
  }

  ngOnInit(){
    this.router.navigate(['app-employee-list'])
  }*/

}

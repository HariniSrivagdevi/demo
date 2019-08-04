import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OnlineserviceService {

  http:HttpClient;
  employees:Employee[]=[];
  constructor(http:HttpClient) { 
    this.http=http;
  }

  fetched:boolean=false;
  
  fetchEmployees()
  {
    this.http.get('http://dummy.restapiexample.com/api/v1/employees')
    .subscribe
    (
      data=>
      {
        if(!this.fetched)
        {
          this.convert(data);
          this.fetched=true;
        }
      }
    );
  }

  getEmployees():Employee[]
  {
    return this.employees;
  }

  convert(data:any)
  {
    for(let o of data)
    {
      let e=new Employee(o.id,o.employee_name,o.employee_salary,o.employee_age,o.profile_image);
      this.employees.push(e);
    }
  }
}
export class Employee{
    id:any;
    employee_name:any;
    employee_salary:any;
    employee_age:any;
    profile_image:any;

      constructor(id:any,employee_name:any,employee_salary:any,employee_age:any,profile_image:any)
      {
        this.id=id;
        this.employee_name=employee_name;
        this.employee_salary=employee_salary;
        this.employee_age=employee_age;
        this.profile_image=profile_image;
      }
  }

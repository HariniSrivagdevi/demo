import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  http:HttpClient;
  products:Products[]=[];

  constructor(http:HttpClient) { 
    this.http=http;
    this.fetchDetails();
  }

  fetched:boolean=false;

  fetchDetails()
  {
    this.http.get('./assets/Products.json')
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

  getProducts():Products[]
  {
    return this.products;
  }

  convert(data:any)
  {
    for(let o of data["products"])
    {
      let e=new Products(o.pid,o.pname,o.pprice,o.pcategory);
      this.products.push(e);
    }
  }
  
  delete(pid:number)
  {
    let foundIndex:number=-1;
    for(let i=0;i<this.products.length;i++)
    {
      let e=this.products[i];
      if(pid==e.pid)
      {
        foundIndex=i;
        break;
      }
    }
    this.products.splice(foundIndex,1);
  }

  add(e:Products){
    this.products.push(e);
  }

  update(data:Products)
  {
    let pid=data.pid;
    for(let i=0;i<this.products.length;i++)
    {
      if(pid === this.products[i].pid)
      {
        this.products[i].pname=data.pname;
        this.products[i].pprice=data.pprice;
        
        this.products[i].pcategory=data.pcategory;
        break;
      }
    }
  }


products1: Products[]
search(data):Products[] {
this.products1=[];
for(let e of this.products) {
if(e.pid==data.pid) {
this.products1.push(e);
}
}
return this.products1;
}
}


export class Products{
  pid:number;
  pname:string;
  pprice:number;
  pcategory:string;
    constructor(pid:number,pname:string,pprice:number,pcategory:string)
    {
      this.pid=pid;
      this.pname=pname;
      this.pprice=pprice;
      this.pcategory=pcategory;
  
    }
}
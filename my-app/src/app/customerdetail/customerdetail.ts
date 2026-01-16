import { Component } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customerdetail',
  imports: [],
  templateUrl: './customerdetail.html',
  styleUrl: './customerdetail.css',
  providers: [Customer]
})
export class Customerdetail {
  constructor(private cs:Customer) {

  }  
  search_customer_by_id (id: string, tdid: HTMLElement, tdaname: HTMLElement, tdage: HTMLElement)
  {
    let c = this.cs.get_customer_detail(id);
    if (c != null) 
    {
      tdid.innerHTML = c.id;
      tdaname.innerHTML = c.name;
      tdage.innerHTML = "<font color='red'>" + c.age + "</font>";
    }
    else
    {
      tdid.innerHTML = "";
      tdaname.innerHTML = "";
      tdage.innerHTML = "";
      alert("Not found customer with id=" + id);
    }

  }
}

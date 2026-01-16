import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from '../customer';

@Component({
  selector: 'app-listcustomer3',
  imports: [CommonModule],
  templateUrl: './listcustomer3.html',
  styleUrl: './listcustomer3.css',
  providers: [Customer]
})
export class Listcustomer3 {
  customer :any
  arr_ages :number[] = [];
  constructor(private cs:Customer) 
  {
    for (let i=20; i <=100 ; i++)
    {
      this.arr_ages[i-20]= i;
    }
    this.do_filter(20, 100);
  }
  do_filter(fromAge:any, toAge:any)
  {
    this.customer = (this.cs as any).filter_customers_by_age(fromAge, toAge);
  }
}

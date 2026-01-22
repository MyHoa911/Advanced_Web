import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Customer {
  customers = [
    { "id" : "c1", "name" : "Alice", "age" : 30 },
    { "id" : "c2", "name" : "Bob", "age" : 25 },
    { "id" : "c3", "name" : "Charlie", "age" : 35 },
    { "id" : "c4", "name" : "Diana", "age" : 28 }
  ];
  constructor() {}
  get_all_customers() {
    return this.customers;
  }
  get_customer_detail(id:string) {
    let c = this.customers.find(x => x.id === id);
    return c;
  }
  filter_customers_by_age(a:number, b:number) 
  {
    return this.customers.filter(c => c.age >= a && c.age <= b);
  }
}

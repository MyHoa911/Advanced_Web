import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listcustomer',
  imports: [CommonModule],
  templateUrl: './listcustomer.html',
  styleUrl: './listcustomer.css',
})
export class Listcustomer {
  customers = [
    { "id": "c1", "name": "Putin", "age": 72, "picture": "putin.png" },
    { "id": "c2", "name": "Trump", "age": 61, "picture": "trump.png" },
    { "id": "c3", "name": "Obama", "age": 61, "picture": "obama.png" },
    { "id": "c4", "name": "Biden", "age": 79, "picture": "biden.png" },
  ]
  ages: number[] = [];
  toAge: any;
  
  constructor() {
    for (let i = 20; i <= 100; i++) {
      this.ages.push(i);
    }
  }
  
  search_customer_by_age(fromAge: any, toAge: any) {
    console.log('Filtering from', fromAge, 'to', toAge);
  }
}

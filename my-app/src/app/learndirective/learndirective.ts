import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-learndirective',
  imports: [CommonModule],
  templateUrl: './learndirective.html',
  styleUrls: ['./learndirective.css'],
})
export class Learndirective {
  flag_value: number = 1;
  changeView() 
  {
    if (this.flag_value == 1) 
      this.flag_value = 2
    else 
      this.flag_value = 1;
  }

  products = ["Thuốc lá", "Rượu", "Bia"];
  customers = [
    { "id": "c1", "name": "Nguyen Van A", "phone": "0123456789" },
    { "id": "c2", "name": "Tran Thi B", "phone": "0987654321" },
    { "id": "c3", "name": "Le Van C", "phone": "0912345678" },
  ];
}

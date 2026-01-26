import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listcustomer2',
  imports: [CommonModule],
  templateUrl: './listcustomer2.html',
  styleUrl: './listcustomer2.css',
})
export class Listcustomer2 {
customers = [
    { id: 1, name: 'Nguyễn Văn A' },
    { id: 2, name: 'Trần Thị B' },
    { id: 3, name: 'Lê Văn C' }
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-listproduct',
  imports: [],
  templateUrl: './listproduct.html',
  styleUrl: './listproduct.css',
})
export class Listproduct {
  products = [{"id":"p1","name":"Coca","price":15, "image":"https://www.bluedogbeverage.com/wp-content/uploads/2022/12/coke-can.jpg"},
              {"id":"p2","name":"Pepsi","price":30, "image":"https://bizweb.dktcdn.net/100/514/431/products/nuoc-ngot-pepsi-cola-lon-320ml-202403091730333958.jpg?v=1716432062970"},
              {"id":"p3","name":"Redbull","price":12, "image":"https://cdn.tgdd.vn/Products/Images/3226/76513/bhx/nuoc-tang-luc-redbull-lon-250ml-15112018162747.JPG"},
  ]
}
             
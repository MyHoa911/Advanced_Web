import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productdetail.html',
  styleUrl: './productdetail.css',
})
export class Productdetail {
  products = [{"id":"p1","name":"Coca","price":15, "image":"https://www.bluedogbeverage.com/wp-content/uploads/2022/12/coke-can.jpg"},
              {"id":"p2","name":"Pepsi","price":-30, "image":"https://bizweb.dktcdn.net/100/514/431/products/nuoc-ngot-pepsi-cola-lon-320ml-202403091730333958.jpg?v=1716432062970"},
              {"id":"p3","name":"Redbull","price":12, "image":"https://cdn.tgdd.vn/Products/Images/3226/76513/bhx/nuoc-tang-luc-redbull-lon-250ml-15112018162747.JPG"},
              {"id":"p3","name":"Aqua","price":-28, "image":"https://bizweb.dktcdn.net/thumb/1024x1024/100/511/037/products/thung-24-chai-nuoc-tinh-khiet-aquafina-355ml-202304250916562202.jpg?v=1718864570117"},
              {"id":"p3","name":"Lavie","price":10, "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQS6FZWF8Rorek3nFyJAdOOY6luAc6RbSQg&s"},
  ]
  product_selected:any
  constructor(private router:Router, private activeRouter: ActivatedRoute)
  {
    // dùng router để điều hướng (mình là người gửi)
    // dùng activeRouter để nhận điều hướng (mình là người nhận)
    activeRouter.paramMap.subscribe((params)=>{
      let id = params.get('id');
      this.product_selected = this.products.find(p => p.id == id);
    })
  }
  goback()
  {
    this.router.navigate(['san-pham-1', {id: this.product_selected.id}]);
  }
}

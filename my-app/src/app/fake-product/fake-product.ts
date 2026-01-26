import { Component } from '@angular/core';
import { FakeproductService } from '../myservices/fakeproduct.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fake-product',
  imports: [CommonModule],
  templateUrl: './fake-product.html',
  styleUrl: './fake-product.css',
})
export class FakeProduct {
  data:any
  errMessage:string=''
  constructor(_service:FakeproductService){
  _service.getFakeProductData().subscribe({
  next:(data)=>{ this.data=data},
  error:(err)=>{
  this.errMessage=err
  }
  })
  }
}


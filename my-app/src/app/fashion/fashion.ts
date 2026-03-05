import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FashionAPIService } from '../myservices/fashion-apiservice';

@Component({
  selector: 'app-fashion',
  imports: [CommonModule],
  templateUrl: './fashion.html',
  styleUrls: ['./fashion.css'],
})
export class Fashion {
  fashions:any;
  errMessage:string=''
  constructor(public _service: FashionAPIService, private router: Router){
    this._service.getFashions().subscribe({
    next:(data)=>{this.fashions=data},
    error:(err)=>{this.errMessage=err}
    })
  }
  view_detail(fashionId:any){
    this.router.navigate(["ex53",fashionId]);
  }

  parseImage(base64str:string)
  {
    let prefix="data:image/jpeg;base64,";
    if(base64str==null)
      return "";
    if (base64str.startsWith(prefix))
      return base64str;
    return prefix+base64str;

  }
}

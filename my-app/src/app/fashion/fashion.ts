import { Component } from '@angular/core';
import { FashionAPIService } from '../myservices/fashion-apiservice';

@Component({
  selector: 'app-fashion',
  imports: [],
  templateUrl: './fashion.html',
  styleUrl: './fashion.css',
})
export class Fashion {
  fashions:any;
  errMessage:string=''
  constructor(public _service: FashionAPIService){
    this._service.getFashions().subscribe({
    next:(data)=>{this.fashions=data},
    error:(err)=>{this.errMessage=err}
    })
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

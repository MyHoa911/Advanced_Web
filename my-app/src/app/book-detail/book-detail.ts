import { Component } from '@angular/core';
import { BookAPIService } from '../myservices/book-apiservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.html',
  styleUrls: ['./book-detail.css'],
})
export class BookDetail {
  book:any;
  errMessage:string=''
  constructor(private _service: BookAPIService, 
    private route: Router, 
    private activeRouter: ActivatedRoute) {
      activeRouter.paramMap.subscribe(params=>{
        let id=params.get('id');
        if(id!=null)
        {
          this.searchBook(id);
        }
      })
  }
  searchBook(bookId:string)
  {
    this._service.getBook(bookId).subscribe({
    next:(data)=>{this.book=data},
    error:(err)=>{this.errMessage=err}
    })
  }
  view_detail(bookId:any)
  {
    this.route.navigate(['/ex41']);
  }
}

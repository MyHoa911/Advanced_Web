import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookAPIService } from '../myservices/book-apiservice';
import { Book } from '../myclasses/iBook';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-update',
  imports: [FormsModule],
  templateUrl: './book-update.html',
  styleUrl: './book-update.css',
})
export class BookUpdate {
  book=new Book();
  books:any
  errMessage:string=''
  constructor(private _service: BookAPIService,
    private route: Router, 
    private activeRouter: ActivatedRoute) {
  this._service.getBooks().subscribe({
  next:(data)=>{this.books=data},
  error:(err)=>{this.errMessage=err}
  })

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

  putBook()
  {
  this._service.putBook(this.book).subscribe({
  next:(data)=>{this.books=data},
  error:(err)=>{this.errMessage=err}
  })
  }
}

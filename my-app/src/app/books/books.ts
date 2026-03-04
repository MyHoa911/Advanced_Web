import { Component } from '@angular/core';
import { BookAPIService } from '../myservices/book-apiservice';

@Component({
  selector: 'app-books',
  templateUrl: './books.html',
  styleUrls: ['./books.css'],
})
export class Books {
  books:any;
  errMessage:string=''
  router: any;
  constructor(private _service: BookAPIService){
    this._service.getBooks().subscribe({
      next:(data)=>{this.books=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  view_detail(bookId:any)
  {
    this.router.navigate(["ex41",bookId]);
  }
  process_remove(book:any)
  {
    if(confirm("Are you sure to delete "+book.BookName+"?"))
    {
      this._service.deleteBook(book.BookId).subscribe({
        next:(data)=>{this.books=data},
        error:(err)=>{this.errMessage=err}
      })
    }
  }
}

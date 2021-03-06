import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/Services/BookServices/book-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-books-component',
  templateUrl: './get-all-books-component.component.html',
  styleUrls: ['./get-all-books-component.component.scss']
})
export class GetAllBooksComponentComponent implements OnInit {
  token:any;
  BookList:any; 
  countBooks: any;
  totalLength: any;
  constructor(private bookService:BookServiceService,private route:Router) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.getAllBook()
  }
  getAllBook() { 
    this.bookService.getAllBooks(this.token).subscribe((response:any)=>{
      this.BookList= response.book
      console.log(this.BookList);
        this.totalLength = response.book.length
        this.countBooks = response.book.length
        console.log(this.countBooks) 
    })
    } 

    quickview(bookResponse:any){
      localStorage.setItem('bookId', bookResponse.bookId);
      console.log("bookId", bookResponse.bookId);
      this.route.navigateByUrl('/home/book/' + bookResponse.bookId)
    }
    
    lowTohigh(){
      this.BookList = this.BookList.sort((low: any, high: any) => low.discountPrice - high.discountPrice);
    }
  
    highTolow(){
      this.BookList = this.BookList.sort((low: any, high: any) => high.discountPrice - low.discountPrice);
    }
  
    newArrivals(){
      this.BookList.reverse();
    }
}

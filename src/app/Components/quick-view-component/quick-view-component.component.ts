import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/Services/BookServices/book-service.service';

@Component({
  selector: 'app-quick-view-component',
  templateUrl: './quick-view-component.component.html',
  styleUrls: ['./quick-view-component.component.scss']
})
export class QuickViewComponentComponent implements OnInit {
  token:any;
  bookId:any; 
  bookWithId:any;
  constructor(private bookService:BookServiceService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.bookId=localStorage.getItem('bookId');
    this.getBookWithId();
  }
  getBookWithId() {
    this.bookService.getAllBooks(this.token).subscribe((response: any) => {
        response.book.forEach((element: any) => {
          console.log(element)
          if (element.bookId == this.bookId) {
            this.bookWithId = element;
        }
      });
    })
  }
}

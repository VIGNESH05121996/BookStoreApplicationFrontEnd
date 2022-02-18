import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/Services/BookServices/book-service.service';
import { AddWishListService } from 'src/app/Services/WishListServices/add-wish-list.service';
import { CartListServiceService } from 'src/app/Services/CartListServices/cart-list-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quick-view-component',
  templateUrl: './quick-view-component.component.html',
  styleUrls: ['./quick-view-component.component.scss']
})
export class QuickViewComponentComponent implements OnInit {
  token:any;
  bookId:any; 
  bookWithId:any;
  constructor(private bookService:BookServiceService,private wishListService:AddWishListService,private route:Router,
       private cartListService:CartListServiceService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.bookId=localStorage.getItem('bookId');
    this.getBookWithId();
  }
  getBookWithId() {
    this.bookService.getAllBooks(this.token).subscribe((response: any) => {
        response.book.forEach((element: any) => {
          if (element.bookId == this.bookId) {
            this.bookWithId = element;
        }
      });
    })
  }

  addWishlist(){
    this.wishListService.addBookToWishList(this.bookId,this.token).subscribe((response:any)=>{
      console.log(response)
      if(response.success == true)
      {
        this.route.navigateByUrl('/home/wishList');
      }
    })
  }

  addCart(){
    this.cartListService.addBookToCart(this.bookId,this.token).subscribe((response:any)=>{
      console.log(response)
      if(response.success == true)
      {
        this.route.navigateByUrl('/home/cart');
      }
    })
  }
}

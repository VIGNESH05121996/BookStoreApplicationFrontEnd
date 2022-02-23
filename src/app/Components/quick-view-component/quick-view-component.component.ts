import { Component, OnInit,Input,Output, EventEmitter  } from '@angular/core';
import { BookServiceService } from 'src/app/Services/BookServices/book-service.service';
import { AddWishListService } from 'src/app/Services/WishListServices/add-wish-list.service';
import { CartListServiceService } from 'src/app/Services/CartListServices/cart-list-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FeedbackServiceService } from 'src/app/Services/FeedbackServices/feedback-service.service';

@Component({
  selector: 'app-quick-view-component',
  templateUrl: './quick-view-component.component.html',
  styleUrls: ['./quick-view-component.component.scss'],
})
export class QuickViewComponentComponent implements OnInit {
  token:any;
  bookId:any; 
  bookWithId:any;
  reviewForm!:FormGroup;
  public form!: FormGroup;
  ratingsOfPerson!:number;
  feeBackList:any;

  constructor(private bookService:BookServiceService,private wishListService:AddWishListService,private route:Router,
       private cartListService:CartListServiceService,private formBuilder: FormBuilder,
           private feedbackService:FeedbackServiceService) {
            this.form = this.formBuilder.group({
              rating1: ['', Validators.required],
            });}

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.bookId=localStorage.getItem('bookId');
    this.getBookWithId();
    this.reviewForm = this.formBuilder.group({
      feedBack: ['', [Validators.required, Validators.email]]
    });
    this.getAllFeedback();
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

  starRating(data:any)
  {
    console.log(data.target.value)
    localStorage.setItem('currentBookRating',data.target.value)
  }

  addFeedBack(){
    let requestData={
      feedBack:this.reviewForm.value.feedBack,
      ratings:this.form.value.rating1
    }
    this.feedbackService.addFeedBack(localStorage.getItem('bookId'),requestData,this.token).subscribe((response:any)=>{
      console.log(response)
      window.location.reload()
    })
  }

  getAllFeedback() {
    this.feedbackService.getAllFeedBack(localStorage.getItem('bookId'),this.token).subscribe((response:any) => {
        console.log(response)
        this.feeBackList=response.feedBacks
        this.feeBackList.reverse()
    })
  }
}

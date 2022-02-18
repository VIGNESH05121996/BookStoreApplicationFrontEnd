import { Component, OnInit } from '@angular/core';
import { CartListServiceService } from 'src/app/Services/CartListServices/cart-list-service.service';

@Component({
  selector: 'app-cart-list-component',
  templateUrl: './cart-list-component.component.html',
  styleUrls: ['./cart-list-component.component.scss']
})
export class CartListComponentComponent implements OnInit {
  token:any;
  cartList:any;
  countBooks:any;
  constructor(private cartListService:CartListServiceService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.getAllCart();
  }
  getAllCart() { 
    this.cartListService.getAllCartList(this.token).subscribe((response:any)=>{
      console.log(response)
      this.cartList=response.cart
      this.cartList.reverse()
      this.countBooks=response.cart.length
    })
    } 

}

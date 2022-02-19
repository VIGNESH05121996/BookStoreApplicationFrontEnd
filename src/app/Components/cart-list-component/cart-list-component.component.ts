import { Component, Input, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import { CartListServiceService } from 'src/app/Services/CartListServices/cart-list-service.service';
import { AddressServicesService } from 'src/app/Services/AddressServices/address-services.service';
import { MatRadioButton, MatRadioChange } from '@angular/material/radio';
import { OrderSercivesService } from 'src/app/Services/OrderServices/order-sercives.service';

@Component({
  selector: 'app-cart-list-component',
  templateUrl: './cart-list-component.component.html',
  styleUrls: ['./cart-list-component.component.scss']
})
export class CartListComponentComponent implements OnInit {
  token:any;
  cartList:any;
  countBooks:any;
  addressCard: boolean = false; 
  addressList:any;
  quantity = 1;

  constructor(private cartListService:CartListServiceService,private addressServices:AddressServicesService,
        private orderService:OrderSercivesService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.getAllCart();
    this.getAddressWithType();
    console.log("AddressId for Place Order: ",localStorage.getItem('addressIdForPlaceOrder'))
  }

  getAllCart() { 
    this.cartListService.getAllCartList(this.token).subscribe((response:any)=>{
      console.log(response)
      this.cartList=response.cart
      this.cartList.reverse()
      this.countBooks=response.cart.length
    })
  } 

  addressCardSwap() {
      console.log(this.addressCard);
      return this.addressCard === true ? (this.addressCard = false) : (this.addressCard = true);
  }

  getAddressWithType(){ 
    this.addressServices.getAllAddress(this.token).subscribe((response:any)=>{
      this.addressList=response.address
    })
  } 

  decrement(cartItem:any){
    this.quantity = this.quantity - 1;
    this.cartQuantityUpdate(cartItem,this.quantity);
    localStorage.setItem('cartBookId',cartItem.bookId)
  }
  increment(cartItem:any){
      this.quantity = this.quantity + 1;
      this.cartQuantityUpdate(cartItem,this.quantity);
  }
  cartQuantityUpdate(bookData:any,quantity:any)
  {
    let requestData={
      quantity:quantity
    }
    this.cartListService.updateCart(bookData.cartId,requestData,this.token).subscribe((response:any)=>{
      console.log(response)
    })
  }

  storeAddressIdToLocalStorage(address:any)
  {
    localStorage.setItem('addressIdForPlaceOrder',address.addressId)
    console.log("addressId stored to local storage");
  }
  
  placeOrder(cartList:any)
  {
    let data = {
      addressId : localStorage.getItem('addressIdForPlaceOrder'),
      quantity : cartList.quantity,
    }
    this.orderService.placeOrder(cartList.bookId,data,this.token).subscribe((response:any) =>{
      console.log(response)
    })
  }
}

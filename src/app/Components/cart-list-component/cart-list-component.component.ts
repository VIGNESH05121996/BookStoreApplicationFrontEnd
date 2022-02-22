import { Component, Input, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import { CartListServiceService } from 'src/app/Services/CartListServices/cart-list-service.service';
import { AddressServicesService } from 'src/app/Services/AddressServices/address-services.service';
import { MatRadioButton, MatRadioChange } from '@angular/material/radio';
import { OrderSercivesService } from 'src/app/Services/OrderServices/order-sercives.service';
import { DataServiceService } from 'src/app/Services/DataService/data-service.service';
import { Router } from '@angular/router';

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
  orderCard:boolean = false;
  addressList:any;
  quantity = 1;
  orderList:any;

  constructor(private cartListService:CartListServiceService,private addressServices:AddressServicesService,
        private orderService:OrderSercivesService,private dataService:DataServiceService,private route:Router) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.getAllCart();
    this.getAddressWithType();
    this.getAllOrders();
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

  orderCardSwap() {
    console.log(this.orderCard);
    return this.orderCard=== true ? (this.orderCard = false) : (this.orderCard = true);
}

  getAddressWithType(){ 
    this.addressServices.getAllAddress(this.token).subscribe((response:any)=>{
      this.addressList=response.address
    })
  } 

  decrement(cartItem:any){
    this.quantity = this.quantity - 1;
    this.cartQuantityUpdate(cartItem,this.quantity);
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
      localStorage.setItem('updatedCurrentCartQuantity',response.cart.quantity)
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
      quantity : localStorage.getItem('updatedCurrentCartQuantity'),
    }
    this.orderService.placeOrder(cartList.bookId,data,this.token).subscribe((response:any) =>{
      console.log(response)
    })
  }

  getAllOrders() { 
    this.orderService.getAllOrderList(this.token).subscribe((response:any)=>{
      console.log(response)
      this.orderList=response.allOrders;
      this.orderList.reverse();
    })
  }

  orderCheckout(orderSummaryData:any)
  {
    console.log(orderSummaryData.orderId)
    this.dataService.sendData(orderSummaryData.orderId)
    this.route.navigateByUrl('home/successOrder')
  }
}

import { Component, OnInit } from '@angular/core';
import { CartListServiceService } from 'src/app/Services/CartListServices/cart-list-service.service';
import { AddressServicesService } from 'src/app/Services/AddressServices/address-services.service';

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
  constructor(private cartListService:CartListServiceService,private addressServices:AddressServicesService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.getAllCart();
    this.getAllAddress();
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
  
  getAllAddress() { 
      this.addressServices.getAllAddress(this.token).subscribe((response:any)=>{
        console.log(response)
        this.addressList=response.address
    })
  } 
}

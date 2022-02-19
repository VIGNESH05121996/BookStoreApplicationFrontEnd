import { Component, Input, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import { CartListServiceService } from 'src/app/Services/CartListServices/cart-list-service.service';
import { AddressServicesService } from 'src/app/Services/AddressServices/address-services.service';
import { MatRadioButton, MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-cart-list-component',
  templateUrl: './cart-list-component.component.html',
  styleUrls: ['./cart-list-component.component.scss']
})
export class CartListComponentComponent implements OnInit {
  @Output() change!:EventEmitter<MatRadioChange>;
  token:any;
  cartList:any;
  countBooks:any;
  addressCard: boolean = false; 
  addressList:any;
  defaultCheckedValue:any;
  rbButtonClick:boolean=false;

  constructor(private cartListService:CartListServiceService,private addressServices:AddressServicesService) { }

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

  addressCardSwap() {
      console.log(this.addressCard);
      return this.addressCard === true ? (this.addressCard = false) : (this.addressCard = true);
  }

  rbButtonCardSwap() {
    console.log(this.rbButtonClick);
    return this.rbButtonClick === true ? (this.rbButtonClick = false) : (this.rbButtonClick = true);
}
  
  getAddressWithType( mrChange: MatRadioChange){ 
      this.addressServices.getAllAddress(this.token).subscribe((response:any)=>{
        this.addressList=response.address.filter((result:any)=>{
          return result.typeId == mrChange.value
         
        })
        console.log(this.addressList)
    })
    
  } 
}

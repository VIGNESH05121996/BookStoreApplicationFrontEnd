import { Component, OnInit } from '@angular/core';
import { OrderSercivesService } from 'src/app/Services/OrderServices/order-sercives.service';

@Component({
  selector: 'app-my-order-list',
  templateUrl: './my-order-list.component.html',
  styleUrls: ['./my-order-list.component.scss']
})
export class MyOrderListComponent implements OnInit {
  token:any;
  orderList:any;
  constructor(private orderService:OrderSercivesService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.getAllOrders();
  }

  getAllOrders() { 
    this.orderService.getAllOrderList(this.token).subscribe((response:any)=>{
      console.log(response)
      this.orderList=response.allOrders;
      this.orderList.reverse();
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/Services/DataService/data-service.service';
import { OrderSercivesService } from 'src/app/Services/OrderServices/order-sercives.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-success-component',
  templateUrl: './order-success-component.component.html',
  styleUrls: ['./order-success-component.component.scss']
})
export class OrderSuccessComponentComponent implements OnInit {
  token:any;
  orderMessage:any;
  message:any;
  subscription!: Subscription;
  constructor(private dataService: DataServiceService,private orderService:OrderSercivesService,private route:Router) { }

  ngOnInit(): void {
    this.subscription = this.dataService.receivedData.subscribe(response => this.orderMessage = response)
  }

  onClickingContinue()
  {
    this.route.navigateByUrl('home/books')
  }
}

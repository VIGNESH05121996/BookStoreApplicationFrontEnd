import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  fullName:any
  constructor(private route:Router) { }

  ngOnInit(): void {
    this.fullName=localStorage.getItem('fullName')
  }
  
  onClickLogout()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('currentBookRating');
    localStorage.removeItem('fullName');
    localStorage.removeItem('addressIdForPlaceOrder');
    localStorage.removeItem('cartBookId');
    localStorage.removeItem('bookId');
    localStorage.removeItem('currentBookCartQuantity');
    localStorage.removeItem('updatedCurrentCartQuantity');
    this.route.navigateByUrl('account');
  }
}

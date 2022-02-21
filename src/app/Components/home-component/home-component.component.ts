import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  fullName:any
  constructor() { }

  ngOnInit(): void {
    this.fullName=localStorage.getItem('fullName')
  }

}

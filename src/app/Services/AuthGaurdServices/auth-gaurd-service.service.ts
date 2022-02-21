import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdServiceService {

  constructor() { }
  gettoken(){
    return !!localStorage.getItem('token');
  }
}

import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpServicesService } from '../HttpServices/http-services.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartListServiceService {

  constructor(private httpService:HttpServicesService,private activatedRoute:ActivatedRoute) { }

  addBookToCart(data:any,token:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        Authorization: 'Bearer '+ token
      })
    }
    return this.httpService.postRequest('/Cart/'+data,data,true,header);
  }

  getAllCartList(token:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        Authorization: 'Bearer '+ token
      })
    }
    return this.httpService.getRequest('/Cart',true,header);
  }

  updateCart(cartId:any,data:any,token:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        Authorization: 'Bearer '+ token
      })
    }
    return this.httpService.putRequest('/Cart/'+cartId,data,true,header);
  }
}

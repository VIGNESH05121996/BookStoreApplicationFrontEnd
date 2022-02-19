import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpServicesService } from '../HttpServices/http-services.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderSercivesService {

  constructor(private httpService:HttpServicesService,private activatedRoute:ActivatedRoute) { }

placeOrder(bookId:any,data:any,token:any)
{
  let header={
    headers:new HttpHeaders({
      'Content-Type': 'application/json-patch+json',
      Authorization: 'Bearer '+ token
    })
  }
  return this.httpService.postRequest('/Order/'+bookId,data,true,header);
}
}

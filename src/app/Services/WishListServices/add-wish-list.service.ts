import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpServicesService } from '../HttpServices/http-services.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AddWishListService {

  constructor(private httpService:HttpServicesService,private activatedRoute:ActivatedRoute) { }
  addBookToWishList(data:any,token:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        Authorization: 'Bearer '+ token
      })
    }
    return this.httpService.postRequest('/WishList/'+data,data,true,header);
  }

  getAllWishList(token:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        Authorization: 'Bearer '+ token
      })
    }
    return this.httpService.getRequest('/WishList',true,header);
  }

  deleteWishList(data:any,token:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        Authorization:'Bearer '+ token
        
      })
    }
    return this.httpService.deleteRequest('/WishList/'+data,true,header);
  }
}

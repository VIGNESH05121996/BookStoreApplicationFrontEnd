import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpServicesService } from '../HttpServices/http-services.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private httpService:HttpServicesService,private activatedRoute:ActivatedRoute) { }
  signup(data:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json'
        
      })
    }
    return this.httpService.postRequest('/User/signup',data,false,header);
  }
  login(data:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json'
        
      })
    }
    return this.httpService.postRequest('/User/login',data,false,header);
  }

  forgetPassword(data:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json'
        
      })
    }
    return this.httpService.postRequest('/User/forgetPassword',data,false,header);
  }

  resetPassword(data:any,token:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        Authorization: 'Bearer '+ token
      })
    }
    return this.httpService.putRequest('/User/resetPassword',data,true,header);
  }
}

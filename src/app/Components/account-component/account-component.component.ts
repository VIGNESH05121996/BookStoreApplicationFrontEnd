import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServicesService } from 'src/app/Services/UserServices/user-services.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-account-component',
  templateUrl: './account-component.component.html',
  styleUrls: ['./account-component.component.scss']
})
export class AccountComponentComponent implements OnInit {
  loginSigupSwitch : boolean=true;
  signupForm!:FormGroup;
  loginForm!:FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private userServices:UserServicesService,private route:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: ['', Validators.required]
    });
    this.loginForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  loginSigupSwap() {
    console.log(this.loginSigupSwitch);
    return this.loginSigupSwitch === true ? (this.loginSigupSwitch = false) : (this.loginSigupSwitch = true);
  }

  onSubmittedSignUp(){
    this.submitted=true;
    if(this.signupForm.value)
    {
      console.log(this.signupForm.value);
      let requestData={
        fullName:this.signupForm.value.fullName,
        emailId:this.signupForm.value.emailId,
        password:this.signupForm.value.password,
        mobileNumber:this.signupForm.value.mobileNumber
      }
      this.userServices.signup(requestData).subscribe((response:any)=>{
        console.log(response)
      })
    }
    else
    console.log("invalid");
  }

  onSubmittedLogin(){
    this.submitted=true;
    if(this.loginForm.value)
    {
      console.log(this.loginForm.value);
      let requestData={
        emailId:this.loginForm.value.emailId,
        password:this.loginForm.value.password
      }
      this.userServices.login(requestData).subscribe((response:any)=>{
        console.log(response)
        if(response.success == true)
        {
          localStorage.setItem('token',response.credentials.jwtToken);
          localStorage.setItem('fullName',response.credentials.fullName)
          this.route.navigateByUrl('home');
        }
      })
    }
    else
    console.log("invalid");
  }
}

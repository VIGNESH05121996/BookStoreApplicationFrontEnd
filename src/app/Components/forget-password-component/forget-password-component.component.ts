import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServicesService } from 'src/app/Services/UserServices/user-services.service';

@Component({
  selector: 'app-forget-password-component',
  templateUrl: './forget-password-component.component.html',
  styleUrls: ['./forget-password-component.component.scss']
})
export class ForgetPasswordComponentComponent implements OnInit {
  forgetPasswordForm!:FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private userServices:UserServicesService) { }

  ngOnInit(): void {
    this.forgetPasswordForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmitted(){
    this.submitted=true;
    if(this.forgetPasswordForm.value)
    {
      console.log(this.forgetPasswordForm.value);
      let requestData={
        emailId:this.forgetPasswordForm.value.emailId
      }
      this.userServices.forgetPassword(requestData).subscribe((response:any)=>{
        console.log(response)
      })
    }
    else
    console.log("invalid");
  }

}

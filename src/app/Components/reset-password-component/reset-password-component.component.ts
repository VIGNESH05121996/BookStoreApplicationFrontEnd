import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServicesService } from 'src/app/Services/UserServices/user-services.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-reset-password-component',
  templateUrl: './reset-password-component.component.html',
  styleUrls: ['./reset-password-component.component.scss']
})
export class ResetPasswordComponentComponent implements OnInit {
  resetPasswordForm!:FormGroup;
  submitted = false;
  token:any;
  constructor(private formBuilder: FormBuilder,private userServices:UserServicesService,private activatedRoute:ActivatedRoute,
    private route:Router) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
    this.token=this.activatedRoute.snapshot.paramMap.get('token');
  }
  onSubmitted(){
    this.submitted=true;
    if(this.resetPasswordForm.value)
    {
      console.log(this.resetPasswordForm.value,this.token);
      let requestData={
        newPassword:this.resetPasswordForm.value.newPassword,
        confirmPassword:this.resetPasswordForm.value.confirmPassword
      }
      this.userServices.resetPassword(requestData,this.token).subscribe((response:any)=>{
        console.log(response)
        if(response.success == true)
        {
          this.route.navigateByUrl('account')
        }
      })
    }
    else
    console.log("invalid");
  }
}

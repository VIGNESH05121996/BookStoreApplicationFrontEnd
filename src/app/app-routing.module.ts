import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponentComponent } from './Components/account-component/account-component.component';
import { ForgetPasswordComponentComponent } from './Components/forget-password-component/forget-password-component.component';
import { ResetPasswordComponentComponent } from './Components/reset-password-component/reset-password-component.component';

const routes: Routes = [
  {path: '',   redirectTo: '/account', pathMatch: 'full'},
  {path:'account',component:AccountComponentComponent},
  {path:'forgetPassword',component:ForgetPasswordComponentComponent },
  {path:'forgetPassword',component:ForgetPasswordComponentComponent },
  {path:'resetPassword/:token',component:ResetPasswordComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

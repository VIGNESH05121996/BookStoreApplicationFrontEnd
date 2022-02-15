import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponentComponent } from './Components/account-component/account-component.component';
import { ForgetPasswordComponentComponent } from './Components/forget-password-component/forget-password-component.component';

const routes: Routes = [
  {path: '',   redirectTo: '/account', pathMatch: 'full'},
  {path:'account',component:AccountComponentComponent},
  {path:'forgetPassword',component:ForgetPasswordComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

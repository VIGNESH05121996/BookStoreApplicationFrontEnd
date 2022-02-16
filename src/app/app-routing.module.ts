import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponentComponent } from './Components/account-component/account-component.component';
import { ForgetPasswordComponentComponent } from './Components/forget-password-component/forget-password-component.component';
import { ResetPasswordComponentComponent } from './Components/reset-password-component/reset-password-component.component';
import { HomeComponentComponent } from './Components/home-component/home-component.component';
import { GetAllBooksComponentComponent } from './Components/get-all-books-component/get-all-books-component.component';

const routes: Routes = [
  {path: '',   redirectTo: '/account', pathMatch: 'full'},
  {path:'account',component:AccountComponentComponent},
  {path:'forgetPassword',component:ForgetPasswordComponentComponent },
  {path:'forgetPassword',component:ForgetPasswordComponentComponent },
  {path:'resetPassword/:token',component:ResetPasswordComponentComponent },
  {path:'home',component:HomeComponentComponent,
  children:[
      {path:'', redirectTo:"/home/books", pathMatch:'full' },
      {path:'books', component:GetAllBooksComponentComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

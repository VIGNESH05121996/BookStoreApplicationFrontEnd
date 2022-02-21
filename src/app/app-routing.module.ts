import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponentComponent } from './Components/account-component/account-component.component';
import { ForgetPasswordComponentComponent } from './Components/forget-password-component/forget-password-component.component';
import { ResetPasswordComponentComponent } from './Components/reset-password-component/reset-password-component.component';
import { HomeComponentComponent } from './Components/home-component/home-component.component';
import { GetAllBooksComponentComponent } from './Components/get-all-books-component/get-all-books-component.component';
import { QuickViewComponentComponent } from './Components/quick-view-component/quick-view-component.component';
import { WishListComponentComponent } from './Components/wish-list-component/wish-list-component.component';
import { CartListComponentComponent } from './Components/cart-list-component/cart-list-component.component';
import { OrderSuccessComponentComponent } from './Components/order-success-component/order-success-component.component';
import { AuthenticationGuard } from './Components/authentication.guard';

const routes: Routes = [
  {path: '',   redirectTo: '/account', pathMatch: 'full'},
  {path:'account',component:AccountComponentComponent},
  {path:'forgetPassword',component:ForgetPasswordComponentComponent },
  {path:'forgetPassword',component:ForgetPasswordComponentComponent },
  {path:'resetPassword/:token',component:ResetPasswordComponentComponent },
  {path:'home',component:HomeComponentComponent,canActivate:[AuthenticationGuard],
  children:[
      {path:'', redirectTo:"/home/books", pathMatch:'full' },
      {path:'books', component:GetAllBooksComponentComponent},
      {path:'book/:bookId', component:QuickViewComponentComponent},
      {path:'wishList', component:WishListComponentComponent},
      {path:'cart', component:CartListComponentComponent},
      {path:'successOrder', component:OrderSuccessComponentComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

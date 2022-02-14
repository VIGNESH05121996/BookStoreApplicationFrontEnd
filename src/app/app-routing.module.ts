import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponentComponent } from './Components/account-component/account-component.component';

const routes: Routes = [
  {path: '',   redirectTo: '/account', pathMatch: 'full'},
  {path:'account',component:AccountComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

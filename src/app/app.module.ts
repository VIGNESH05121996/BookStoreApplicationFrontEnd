import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatButtonModule} from '@angular/material/button';
import { AccountComponentComponent } from './Components/account-component/account-component.component';
import { ForgetPasswordComponentComponent } from './Components/forget-password-component/forget-password-component.component';
import { ResetPasswordComponentComponent } from './Components/reset-password-component/reset-password-component.component';
import { HomeComponentComponent } from './Components/home-component/home-component.component';
import {MatIconModule} from '@angular/material/icon';
import { GetAllBooksComponentComponent } from './Components/get-all-books-component/get-all-books-component.component';
import { FooterComponentComponent } from './Components/footer-component/footer-component.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponentComponent,
    ForgetPasswordComponentComponent,
    ResetPasswordComponentComponent,
    HomeComponentComponent,
    GetAllBooksComponentComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,MatInputModule,FormsModule,ReactiveFormsModule,FlexLayoutModule,MatButtonModule,
    MatIconModule,MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

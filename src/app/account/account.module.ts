
import { NgModule } from '@angular/core';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
    LandingpageComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
   ReactiveFormsModule,
   HttpClientModule,//2.imports arary after browser module
    AccountRoutingModule
  ]
})
export class AccountModule { }

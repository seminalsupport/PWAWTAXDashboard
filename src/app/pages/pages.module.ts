
import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    CollectionComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
   ReactiveFormsModule,
   HttpClientModule,//2.imports arary after browser module
   PagesRoutingModule
  ]
})
export class PagesModule { }

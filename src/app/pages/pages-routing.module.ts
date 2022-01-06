import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';


const routes: Routes = [
   
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'collection',
        component: CollectionComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }

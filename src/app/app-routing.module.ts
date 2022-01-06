import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';



const routes: Routes = [
  
  
  { path: '',  loadChildren: () => import('./account/account.module').then(m => m.AccountModule)},
  
  
  { path: 'pages', component: PagesComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/userinfo',
        pathMatch: 'full'
      },
      {
        path:'userinfo',
        loadChildren: ()=> import('./steponepage/steponepage.module').then(m => m.SteponepageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

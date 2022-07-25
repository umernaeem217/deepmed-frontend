import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/authentication/authentication-routing.module').then(m => m.AuthenticationRoutingModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./modules/main-application/main-application-routing.module').then(m=> m.MainApplicationRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { ForgotPassowordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyComponent } from './verify/verify.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignUpComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPassowordComponent
      },
      {
        path: 'verify',
        component: VerifyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }

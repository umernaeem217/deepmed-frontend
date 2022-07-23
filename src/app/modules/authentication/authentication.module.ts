import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPassowordComponent } from './forgot-password/forgot-password.component';
import { VerifyComponent } from './verify/verify.component';
import { AuthWrapperComponent } from './auth-wrapper/auth-wrapper.component';


@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPassowordComponent,
    VerifyComponent,
    AuthWrapperComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPassowordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyComponent } from './components/verify/verify.component';
import { AuthWrapperComponent } from './components/auth-wrapper/auth-wrapper.component';


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

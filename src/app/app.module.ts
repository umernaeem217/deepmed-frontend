import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from "ngx-spinner";

import { SharedModule } from 'src/app/modules/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from 'src/app/modules/core/core.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { LoaderInterceptor } from './modules/shared/interceptors/loader.interceptors';
import { MainApplicationModule } from './modules/main-application/main-application.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    NgxSpinnerModule,  
    NgbModule,

    AuthenticationModule,
    MainApplicationModule,
    CoreModule,
    SharedModule,
  ],
  exports:[
    NgxSpinnerModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true
  }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ButtonComponent } from './components/button/button.component';
import { TextfieldComponent } from './components/textfield/textfield.component';
import { FormPasswordComponent } from './components/form-password/form-password.component';
import { FormPlainComponent } from './components/form-plain/form-plain.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ButtonComponent,
    TextfieldComponent,
    FormPasswordComponent,
    FormPlainComponent,
    FormSelectComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    ButtonComponent,
    FormComponent
  ]
})
export class SharedModule { }

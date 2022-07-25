import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlansRoutingModule } from './plans-routing.module';
import { PlansComponent } from './components/plans/plans.component';
import { CoreModule } from 'src/app/modules/core/core.module';


@NgModule({
  declarations: [
    PlansComponent
  ],
  imports: [
    CommonModule,
    PlansRoutingModule,
    CoreModule
  ]
})
export class PlansModule { }

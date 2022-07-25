import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainApplicationComponent } from './main-application.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoreModule } from '../core/core.module';
import { MainApplicationRoutingModule } from './main-application-routing.module';
import { PlansModule } from './modules/plans/plans.module';


@NgModule({
  declarations: [
    MainApplicationComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    PlansModule,
    MainApplicationRoutingModule
  ]
})
export class MainApplicationModule { }

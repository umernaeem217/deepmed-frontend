import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { MainApplicationComponent } from "./main-application.component";

const routes: Routes = [
  {
    path: '',
    component: MainApplicationComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'plans',
        loadChildren: () => import('./modules/plans/plans-routing.module').then(m => m.PlansRoutingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainApplicationRoutingModule { }

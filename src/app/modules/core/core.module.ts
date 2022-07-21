import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    SidebarComponent,
    ContainerComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ContainerComponent
  ]
})
export class CoreModule { }

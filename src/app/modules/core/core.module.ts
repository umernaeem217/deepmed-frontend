import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { ContainerHeadingComponent } from './components/container-heading/container-heading.component';



@NgModule({
  declarations: [
    SidebarComponent,
    ContainerComponent,
    HeaderComponent,
    ContainerHeadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ContainerComponent,
    ContainerHeadingComponent
  ]
})
export class CoreModule { }

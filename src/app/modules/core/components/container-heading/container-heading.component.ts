import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-heading',
  templateUrl: './container-heading.component.html',
  styleUrls: ['./container-heading.component.scss']
})
export class ContainerHeadingComponent implements OnInit {

  @Input() title: string = ''
  
  constructor() { }

  ngOnInit(): void {
  }

}

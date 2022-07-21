import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormConfig } from 'src/shared/models/formconfig.model';

@Component({
  selector: 'lib-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextfieldComponent implements OnInit {

  @Input() config!: FormConfig;
  constructor() { }

  ngOnInit(): void {
  }

}

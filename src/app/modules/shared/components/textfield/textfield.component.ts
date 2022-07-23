import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlOption } from 'src/app/modules/shared/models/form-control-options.model';

@Component({
  selector: 'lib-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextfieldComponent implements OnInit {

  @Input() config!: FormControlOption;
  @Input() form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlOption } from 'src/app/modules/shared/models/form-control-options.model';

@Component({
  selector: 'lib-form-plain',
  templateUrl: './form-plain.component.html',
  styleUrls: ['./form-plain.component.scss']
})
export class FormPlainComponent implements OnInit {
  
  @Input() form!: FormGroup;
  @Input() config!: FormControlOption;
  constructor() { }

  ngOnInit(): void {
  }

}

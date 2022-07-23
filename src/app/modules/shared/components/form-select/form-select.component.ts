import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlOption } from 'src/app/modules/shared/models/form-control-options.model';

@Component({
  selector: 'lib-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements OnInit {
  
  @Input() form!: FormGroup;
  @Input() config!: FormControlOption;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormConfig } from 'src/shared/models/formconfig.model';

@Component({
  selector: 'lib-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements OnInit {
  
  @Input() form!: FormGroup;
  @Input() config!: FormConfig;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormConfig } from 'src/app/modules/shared/models/formconfig.model';

@Component({
  selector: 'lib-form-plain',
  templateUrl: './form-plain.component.html',
  styleUrls: ['./form-plain.component.scss']
})
export class FormPlainComponent implements OnInit {
  
  @Input() form!: FormGroup;
  @Input() config!: FormConfig;
  constructor() { }

  ngOnInit(): void {
  }

}

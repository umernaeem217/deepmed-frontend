import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormConfig } from 'src/app/modules/shared/models/formconfig.model';

@Component({
  selector: 'lib-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() form!: FormGroup;
  @Input() formControls: FormConfig[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}

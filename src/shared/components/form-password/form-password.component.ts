import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormConfig } from 'src/shared/models/formconfig.model';

@Component({
  selector: 'lib-form-password',
  templateUrl: './form-password.component.html',
  styleUrls: ['./form-password.component.scss']
})
export class FormPasswordComponent implements OnInit {

  @Input() form!: FormGroup;
  @Input() config!: FormConfig;
  public viewPassword: boolean = false;
  constructor() { }

  ngOnInit(): void {
    console.log(this.config)
  }

}

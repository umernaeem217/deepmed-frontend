import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormControlOption } from 'src/app/modules/shared/models/form-control-options.model';

@Component({
  selector: 'lib-form-password',
  templateUrl: './form-password.component.html',
  styleUrls: ['./form-password.component.scss']
})
export class FormPasswordComponent implements OnInit {

  @Input() form!: UntypedFormGroup;
  @Input() config!: FormControlOption;
  public viewPassword: boolean = false;
  constructor() { }

  ngOnInit(): void {
    console.log(this.config)
  }

}

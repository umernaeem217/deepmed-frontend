import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormConfig } from 'src/shared/models/formconfig.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DeepMed';
  public form: FormGroup;
  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      firstName: [''],
      lastName: [1]
    });
    this.form.patchValue({
      firstName: '234',
      lastName: 1
    });
  }
  controls: FormConfig[]= [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "Enter your first name",
      options: [
        {
          name: "Umer",
          value: "Umer"
        },
        {
          name: "Ali",
          value: "Ali"
        }
      ],
      required: true,
      disabled: false,
      width: "col-md-3"
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "number",
      placeholder: "Please enter your last name",
      width: "col-md-3"
    }
  ]
}

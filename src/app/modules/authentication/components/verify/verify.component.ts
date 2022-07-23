import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControlOption } from '../../../shared/models/form-control-options.model';
import { FormService } from '../../../shared/services/form.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  private formControls: FormControlOption[];
  private form?: FormGroup;

  public formName: string = 'verify';
  public showResend: boolean = false;
  public heading: string = 'Verify your account';
  public subHeading: string = 'Please check your email.';

  constructor(private formService: FormService, private router: Router) {
    this.formControls =[{
      name: 'code',
      label: 'Verification Code',
      type: 'text',
      placeholder: 'Verification Code',
      required: true,
      defaultValue: '',
      errorMessage:'Please enter a valid code.',
      validatorOrOpts: [Validators.required]
    },
    {
      name: 'organizationName',
      label: 'Organization Name',
      type: 'text',
      placeholder: 'Organization Name',
      required: true,
      defaultValue: '',
      errorMessage:'Please enter a valid organization name.',
      validatorOrOpts: [Validators.required]
    },
    {
      name: 'icdScheme',
      label: 'ICD Scheme',
      type: 'select',
      placeholder: 'Please select an ICD Scheme',
      required: true,
      defaultValue: '',
      errorMessage:'Please select an ICD Scheme.',
      validatorOrOpts: [Validators.required],
      options:[{
        name:"Demo",
        value:"demo"
      }]
    }
  ]
  }

  ngOnInit(): void {
    
  }

  renderFields(form: FormGroup): void {
    this.form = form;
    this.formService.updateForm(this.formName, this.formControls);
  }

  submitForm(): void {
    if(this.form?.valid){
      this.router.navigate(['/verify']);
      setTimeout(()=>{
        this.showResend = true;
      }, 5000)
    }else{
      this.formService.validateAllFormFields(this.formName);
    }
  }

  resendEmail(): void {
    this.showResend = false;
  }

}

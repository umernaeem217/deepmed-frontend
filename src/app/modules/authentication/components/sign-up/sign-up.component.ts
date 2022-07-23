import { Component, OnInit } from '@angular/core';
import { FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/modules/shared/services/alert.service';
import { FormControlOption } from '../../../shared/models/form-control-options.model';
import { FormService } from '../../../shared/services/form.service';
import { ConfirmPasswordValidator } from '../../../shared/utilities/validators/confirm-password.validator';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  private formControls: FormControlOption[];
  private form?: FormGroup;

  public formName: string = 'signup';
  public heading: string = 'Sign Up on Deep Med';
  public subHeading: string = 'Enter your information below.';

  constructor(private formService: FormService,private alertService: AlertService, private router: Router, private service: AuthenticationService) {
    this.formControls =[{
      name: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Name',
      required: true,
      defaultValue: '',
      errorMessage:'Please enter a valid name.',
      validatorOrOpts: [Validators.required]
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Email',
      required: true,
      defaultValue: '',
      errorMessage:'Please enter a valid email.',
      validatorOrOpts: [Validators.required, Validators.email]
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Password',
      required: true,
      defaultValue: '',
      errorMessage:'Please enter a valid password.',
      validatorOrOpts: [Validators.required]
    },
    {
      name: 'confirmPassword',
      label: 'Confirm Password',
      type: 'password',
      placeholder: 'Confirm Password',
      required: true,
      defaultValue: '',
      errorMessage:'',
      applyGlobalValidators: true,
      validatorOrOpts: [Validators.required]
    }
  ]
  }

  ngOnInit(): void {
    
  }

  renderFields(form: FormGroup): void {
    this.form = form;
    this.formService.updateForm(this.formName, this.formControls);
    this.formService.addValidator(this.formName, ConfirmPasswordValidator.MatchValidator("password", "confirmPassword"));
  }

  async submitForm(): Promise<void> {
    if(this.form?.valid){
      const res = await this.service.signup({...this.form.value});
      if(res.statusCode==200){
        
      }else{
        this.alertService.error(res.message);
      }
      this.router.navigate(['/verify']);
    }else{
      this.formService.validateAllFormFields(this.formName);
    }
  }

}

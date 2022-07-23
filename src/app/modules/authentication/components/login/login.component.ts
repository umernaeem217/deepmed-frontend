import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/modules/shared/services/alert.service';
import { FormControlOption } from '../../../shared/models/form-control-options.model';
import { FormService } from '../../../shared/services/form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private formControls: FormControlOption[];
  private form?: FormGroup;

  public formName: string = 'login';
  public heading: string = 'Log In to Deep Med';
  public subHeading: string = 'Enter your email and password below.';

  constructor(private formService: FormService, private router: Router, private alertService: AlertService) {
    this.formControls =[{
      name: 'identity',
      label: 'Identity',
      type: 'text',
      placeholder: 'Email or Username',
      required: true,
      defaultValue: '',
      errorMessage:'Please enter a valid email or username.',
      validatorOrOpts: [Validators.required]
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Password',
      required: true,
      defaultValue: '',
      additionalInfo: 'Forgot Password?',
      errorMessage:'Please enter a valid password.',
      additionalClickEvent: ()=>{
        this.router.navigate(['/forgot-password']);
      },
      validatorOrOpts: [Validators.required]
    }]
  }

  ngOnInit(): void {
    
  }

  renderFields(form: FormGroup): void {
    this.form = form;
    this.formService.updateForm(this.formName, this.formControls);
  }

  submitForm(): void {
    if(this.form?.valid){
      this.alertService.open({
        title: "Success",
        icon:"success",
        text: "You have successfully logged in.",
        heightAuto: false,
        showConfirmButton: false
      })
      // if(this.form.value.identity=="verify"){
      //   this.router.navigate(['/verify']);
      // }else{
      //   this.router.navigate(['/application']);
      // }

    }else{
      this.formService.validateAllFormFields(this.formName);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControlOption } from '../../../shared/models/form-control-options.model';
import { FormService } from '../../../shared/services/form.service';
import { ConfirmPasswordValidator } from '../../../shared/utilities/validators/confirm-password.validator';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPassowordComponent implements OnInit {
  private formControls: FormControlOption[];
  private form?: FormGroup;
  private resendSetTimeout?: NodeJS.Timeout;

  public formName: string = 'verify';
  public showResend: boolean = false;
  public codeSent: boolean = false;
  public codeVerified: boolean = false;
  public heading: string = 'Forgot your password?';
  public subHeading: string = 'Please enter your email or username.';

  constructor(private formService: FormService, private router: Router) {
    this.formControls = [
      {
        name: 'identity',
        label: 'Identity',
        type: 'text',
        placeholder: 'Email or Username',
        required: true,
        defaultValue: '',
        errorMessage: 'Please enter a valid email or username.',
        validatorOrOpts: [Validators.required],
      },
    ];
  }

  ngOnInit(): void {}

  addVerificationField(): void {
    this.formControls.push({
      name: 'verification',
      label: 'Verification Code',
      type: 'text',
      placeholder: 'Verification Code',
      required: true,
      defaultValue: '',
      errorMessage: 'Please enter a valid verification code.',
      validatorOrOpts: [Validators.required],
    });
    this.formService.updateForm(this.formName, this.formControls);
  }

  renderFields(form: FormGroup): void {
    this.form = form;
    this.formService.updateForm(this.formName, this.formControls);
  }

  sendEmail(): void {
    if (this.form?.valid) {
      this.codeSent = true;
      this.form?.get('identity')?.disable();
      this.addVerificationField();
      this.resendSetTimeout = setTimeout(() => {
        this.showResend = true;
        this.form?.get('identity')?.enable();
      }, 5000);
    } else {
      this.formService.validateAllFormFields(this.formName);
    }
  }

  resendEmail(): void {
    this.form?.get('identity')?.disable();
    this.showResend = false;
    this.resendSetTimeout = setTimeout(() => {
      this.showResend = true;
      this.form?.get('identity')?.enable();
    }, 5000);
  }

  resetPassword(): void {
    if (this.form?.valid) {
      this.router.navigate(['/login']);
    } else {
      this.formService.validateAllFormFields(this.formName);
    }
  }

  verifyCode(): void {
    if (this.form?.valid) {
      if (this.form.get('verification')?.value === '123456') {
        if(this.resendSetTimeout){
          clearTimeout(this.resendSetTimeout);
        }
        this.showResend = false;
        this.codeVerified = true;
        this.heading = 'Reset your password';
        this.subHeading = 'Please enter your new password.';
        this.formControls = [
          {
            name: 'password',
            label: 'Password',
            type: 'password',
            placeholder: 'Password',
            required: true,
            defaultValue: '',
            errorMessage: 'Please enter a valid password.',
            validatorOrOpts: [Validators.required],
          },
          {
            name: 'confirmPassword',
            label: 'Confirm Password',
            type: 'password',
            placeholder: 'Confirm Password',
            required: true,
            defaultValue: '',
            errorMessage: '',
            applyGlobalValidators: true,
            validatorOrOpts: [Validators.required],
          },
        ];
      }
      this.formService.updateForm(this.formName, this.formControls);
      this.formService.addValidator(this.formName, ConfirmPasswordValidator.MatchValidator("password", "confirmPassword"));
    } else {
      this.formService.validateAllFormFields(this.formName);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/modules/shared/services/alert.service';
import { FormControlOption } from '../../../shared/models/form-control-options.model';
import { FormService } from '../../../shared/services/form.service';
import { ConfirmPasswordValidator } from '../../../shared/utilities/validators/confirm-password.validator';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPassowordComponent implements OnInit {
  private formControls: FormControlOption[];
  private form?: UntypedFormGroup;
  private resendSetTimeout?: NodeJS.Timeout;
  private code?: string;
  private identity?: string;

  public formName: string = 'verify';
  public showResend: boolean = false;
  public codeSent: boolean = false;
  public codeVerified: boolean = false;
  public heading: string = 'Forgot your password?';
  public subHeading: string = 'Please enter your email or username.';

  constructor(private formService: FormService, private router: Router,private alertService: AlertService, private service: AuthenticationService) {
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
      name: 'code',
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

  renderFields(form: UntypedFormGroup): void {
    this.form = form;
    this.formService.updateForm(this.formName, this.formControls);
  }

  async sendEmail(): Promise<void> {
    if (this.form?.valid) {
      this.codeSent = true;      
      this.form?.get('identity')?.disable();
      this.addVerificationField();
      this.resendSetTimeout = setTimeout(() => {
        this.showResend = true;
        this.form?.get('identity')?.enable();
      }, 5000);
      const response = await this.service.requestPasswordReset(this.form.getRawValue()?.identity);
      if(response.statusCode==200){
        this.alertService.success(response.message);
      }else{
        this.alertService.error(response.message);
      }

    } else {
      this.formService.validateAllFormFields(this.formName);
    }
  }

  async resendEmail(): Promise<void> {
    this.form?.get('identity')?.disable();
    this.showResend = false;
    this.resendSetTimeout = setTimeout(() => {
      this.showResend = true;
      this.form?.get('identity')?.enable();
    }, 5000);
    const response = await this.service.requestPasswordReset(this.form?.getRawValue()?.identity);
      if(response.statusCode==200){
        this.alertService.success(response.message);
      }else{
        this.alertService.error(response.message);
      }
  }

  async resetPassword(): Promise<void> {
    if (this.form?.valid) {
      const response = await this.service.resetPassword({...this.form.getRawValue(), code: this.code, identity: this.identity});
      if(response.statusCode==200){
        this.alertService.success(response.message);
        this.router.navigate(['/login']);
      }else{
        this.alertService.error(response.message);
      }
    } else {
      this.formService.validateAllFormFields(this.formName);
    }
  }

  async verifyCode(): Promise<void> {
    if (this.form?.valid) {
      const response = await this.service.checkResetPasswordCode({...this.form.getRawValue()});
      if(response.statusCode==200){
        this.alertService.success(response.message);
        if(this.resendSetTimeout){
          clearTimeout(this.resendSetTimeout);
        }
        this.showResend = false;
        this.codeVerified = true;
        this.heading = 'Reset your password';
        this.subHeading = 'Please enter your new password.';
        this.code = this.form.value?.code;
        this.identity = this.form?.getRawValue()?.identity;
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
        this.formService.updateForm(this.formName, this.formControls);
      this.formService.addValidator(this.formName, ConfirmPasswordValidator.MatchValidator("password", "confirmPassword"));
      }else{
        this.alertService.error(response.message);
      }
    } else {
      this.formService.validateAllFormFields(this.formName);
    }
  }
}

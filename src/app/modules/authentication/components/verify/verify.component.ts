import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/modules/shared/services/alert.service';
import { FormControlOption } from '../../../shared/models/form-control-options.model';
import { FormService } from '../../../shared/services/form.service';
import { AuthenticationService } from '../../services/authentication.service';
import { IcdSchemeService } from '../../services/icdScheme.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  private formControls: FormControlOption[] =[];
  private form?: UntypedFormGroup;
  private userId?: string;
  private resendTimeout?: NodeJS.Timeout;

  public formName: string = 'verify';
  public showResend: boolean = false;
  public heading: string = 'Verify your account';
  public subHeading: string = 'Please check your email.';

  constructor(private formService: FormService,private service: AuthenticationService,private alertService: AlertService ,private router: Router, private iscService: IcdSchemeService) {
    this.userId = this.router.getCurrentNavigation()?.extras?.state?.['userId'];
    if(!this.userId){
      this.router.navigate(['/login']);
      return;
    }
  }

  ngOnInit(): void {
    this.fetchIcdSchemes();
    this.resendTimeout = setTimeout(()=>{
      this.showResend = true;
    }, 5000);
  }

  async fetchIcdSchemes(): Promise<void> {
    const response = await this.iscService.getAll();
    if(response.statusCode==200){
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
        options: response.data ?? []
      }
      
    ]
    this.formService.updateForm(this.formName, this.formControls);
    }else{
      this.alertService.error(response.message);
    }
  }

  renderFields(form: UntypedFormGroup): void {
    this.form = form;
    this.formService.updateForm(this.formName, this.formControls);
  }

  async submitForm(): Promise<void> {
    if(this.form?.valid){
      const response = await this.service.verifyEmail({...this.form.value,userId: this.userId});
      if(response.statusCode==200){
        if(this.resendTimeout){
        clearTimeout(this.resendTimeout);
        }
        this.alertService.success(response.message);
        this.router.navigate(['/application']);
      }else{
        this.alertService.error(response.message);
      }
    }else{
      this.formService.validateAllFormFields(this.formName);
    }
  }

  async resendEmail(): Promise<void> {
    this.showResend = false;
    if(this.userId){
      const response = await this.service.requestEmailVerification(this.userId);
      if(response.statusCode==200){
        this.alertService.success(response.message);
      }else{
        this.alertService.error(response.message);
      }
      this.resendTimeout = setTimeout(()=>{
        this.showResend = true;
      }, 5000);
    }
    
  }

}

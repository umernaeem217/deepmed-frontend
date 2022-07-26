import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FormControlOption } from 'src/app/modules/shared/models/form-control-options.model';
import { FormService } from '../../services/form.service';
import { ConfirmPasswordValidator } from '../../utilities/validators/confirm-password.validator';

@Component({
  selector: 'lib-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  private controls: FormControlOption[] = []; 
  
  public form!: UntypedFormGroup;
  public renderedControls: FormControlOption[] = [];

  @Input() name!: string;
  @Output() formReady: EventEmitter<UntypedFormGroup> = new EventEmitter<UntypedFormGroup>();

  constructor(private service: FormService, private fb: UntypedFormBuilder) {
    this.form = this.fb.group({});
    this.service.getControlsChangedObservable().subscribe((data: {name: string, controls: FormControlOption[]})=>{
      if(data.name === this.name){
        this.controls = data.controls;
        this.renderFields();
      }
    });
    this.service.getValidateFieldsObservable().subscribe((name: string)=>{
      if(name === this.name){
        this.validateAllFormFields(this.form);
      }
    });
    this.service.getAddValidatorObservable().subscribe((data: {name: string, validator: ValidatorFn})=>{
      if(data.name === this.name){
        this.form.addValidators(data.validator);
      }
    })
   }

  ngOnInit(): void {
    this.formReady.emit(this.form);
  }

  renderFields(): void {
    var toBeRemoved = this.renderedControls.filter(control => !this.controls.includes(control));
    toBeRemoved.forEach((control: FormControlOption) => {
      this.form.removeControl(control.name);
    })
    this.controls.forEach((control: FormControlOption)=>{
      this.form.addControl(control.name,  new UntypedFormControl(control.defaultValue,control.validatorOrOpts,control.asyncValidator));
    });
    this.renderedControls = [...this.controls];
  }

  /**
   * @description
   * Validated all form fields in a form group.
   * Code copied from https://loiane.com/2017/08/angular-reactive-forms-trigger-validation-on-submit/
   */
  validateAllFormFields(formGroup: UntypedFormGroup) {         
    Object.keys(formGroup.controls).forEach(field => {  
      const control = formGroup.get(field);             
      if (control instanceof UntypedFormControl) {             
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof UntypedFormGroup) {        
        this.validateAllFormFields(control);            
      }
    });
  }

}

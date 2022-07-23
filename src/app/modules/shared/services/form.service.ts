import { EventEmitter, Injectable } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { FormControlOption } from '../models/form-control-options.model';

@Injectable({
  providedIn: 'root',
})
export class FormService {

  private $formChanged: Subject<{name: string, controls: FormControlOption[]}> = new Subject<{name: string, controls: FormControlOption[]}>();
  private validateFormClicked: EventEmitter<string> = new EventEmitter<string>();
  private validatorAdded: EventEmitter<{name: string, validator:ValidatorFn}> = new EventEmitter<{name: string, validator: ValidatorFn}>();

  constructor() { }

  getControlsChangedObservable(): Observable<{name: string, controls: FormControlOption[]}>{
    return this.$formChanged.asObservable();
  }

  getValidateFieldsObservable(): Observable<string>{
    return this.validateFormClicked.asObservable();
  }

  getAddValidatorObservable() : Observable<{name: string, validator: ValidatorFn}>{
    return this.validatorAdded.asObservable();
  }

  updateForm(name: string, controls: FormControlOption[]): void{
    this.$formChanged.next({name: name, controls: controls});
  }

  validateAllFormFields(name: string){
    this.validateFormClicked.emit(name);
  }

  addValidator(name: string, validator: ValidatorFn){
    this.validatorAdded.emit({name:name, validator:validator});
  }

}
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class ConfirmPasswordValidator {
  static MatchValidator(source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      debugger;
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);

      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
        ? { mismatch: true }
        : null;
    };
  }
}
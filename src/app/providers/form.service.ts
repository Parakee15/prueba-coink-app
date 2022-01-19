import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  public static validateForm(form: FormGroup): boolean {
    Object.keys(form.controls).forEach(field => {
      const control = form.controls[field];
      control.markAsTouched();
      control.updateValueAndValidity();
    });
    return form.valid;
  }

  public static equalValue(field: string, nameField: string): ValidatorFn {
    return (c: FormControl): ValidationErrors => {

      const value = c.value;
      const valueDepend = c.parent.controls[field].value;
      const params = {
        equalValue: { nameField }
      };
      return (value === valueDepend) ? null : params;
    };
  }

  public static checkValidators(form: FormGroup, controlName: string, validators?: ValidatorFn[]) {
    if (validators) {
      form.get(`${controlName}`).setValidators(validators);
    } else {
      form.get(`${controlName}`).clearValidators();
    }
    form.updateValueAndValidity();
  }
}

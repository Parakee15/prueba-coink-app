import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-control-error',
  templateUrl: './form-control-error.component.html',
  styleUrls: ['./form-control-error.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => FormControlErrorComponent)
    },
  ]
})
export class FormControlErrorComponent implements OnInit, ControlValueAccessor {
  @Input() formControlName: string;
  public control: AbstractControl;
  public formError: string;

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit() {
    this.control = this.controlContainer.control.get(this.formControlName);
    this.control.statusChanges.subscribe(status => {
      if ((this.control.invalid && this.control.dirty) || (this.control.invalid && this.control.touched)) {
        Object.keys(this.control.errors).every(errorName => {
          this.formError = this.getErrorMessage(errorName, this.control.errors[errorName]);
          return false;
        });
      } else { this.formError = ''; }
    });
  }

  private getErrorMessage(errorName: string, error: any) {
    const messages = {
      required: () => 'Campo requerido',
      email: () => 'Email no valido',
      equalValue: (params) => `Este campo no coincide con el ${params.nameField}`,
      numeric: () => `Introduzca solo valores numéricos`,
    };

    return messages[errorName].call(this, error);
  }

  writeValue(obj: any): void { }
  registerOnChange(fn: any): void { }
  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void { }

}

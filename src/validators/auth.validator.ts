import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
const regex: RegExp = /\d+/g;

export function hasAnyNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value;
    const hasNumber = /\d/.test(value);
    return hasNumber ? null : { 'hasAnyNumber': true };
  };
}

export function hasAnyLowercaseLetterValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value;
    const hasAnyLowercaseLetter = /[a-z]/.test(value);
    return hasAnyLowercaseLetter ? null : { 'hasAnyLowercaseLetter': true };
  };
}

export function hasAnyUppercaseLetterValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value;
    const hasAnyUppercaseLetter = /[A-Z]/.test(value);
    return hasAnyUppercaseLetter ? null : { 'hasAnyUppercaseLetter': true };
  };
}

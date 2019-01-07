import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const FORM_FIELD_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomInputComponent),
  multi: true
};

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [FORM_FIELD_VALUE_ACCESSOR]
})
export class CustomInputComponent implements ControlValueAccessor {
  @Input() public label: string;
  @Input() public placeholder: string;
  public model: any;
  public onChange: (value: string) => void;
  public onTouched: () => void;

  public writeValue(obj: any): void {
    this.model = obj;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}

import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DatePickerComponent),
    }]
})
export class DatePickerComponent implements ControlValueAccessor {
  onchange: any;

  date: Date = new Date();

  constructor() {
  }

  registerOnChange(fn: any): void {
    this.onchange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    this.date = obj;
  }

  update(event) {
    this.onchange(event.target.value);
  }
}

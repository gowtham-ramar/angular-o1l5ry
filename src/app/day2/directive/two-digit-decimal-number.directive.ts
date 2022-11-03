
import { Directive, ElementRef, HostListener, Input, OnInit, Optional } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Directive({
  selector: '[appTwoDigitDecimalNumber]'
})
export class TwoDigitDecimalNumberDirective implements OnInit {
  // Allow decimal numbers and negative values
  private regex: RegExp = new RegExp(/^\d*\.?\d{0,2}$/g);
  private regex_only_five: RegExp = new RegExp(/^\d*\.?[5]{0,1}$/g);
  private _valueAccessor: any;
  @Input() validText = '';
  @Input() maxLength: number = 10;

  // Allow key codes for special events. Reflect :
  // Backspace, tab, end, home
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];

  constructor(private el: ElementRef,
    @Optional() private ngControl: NgControl) {
  }
  ngOnInit() {
  }
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {

    // Allow Backspace, tab, end, and home keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    let current: string = this.el.nativeElement.value;
    const position = this.el.nativeElement.selectionStart;
    const next: string = [current.slice(0, position), event.key == 'Decimal' ? '.' : event.key, current.slice(position)].join('');


    if (this.validText) {
      this.regex = this.regex_only_five;
    }
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    } else if (next) {
      const check_max = next.split(".")[0];
      if (check_max.length >= this.maxLength) {
        event.preventDefault();
      }
    }
  }
  @HostListener('change', ['$event'])
  onChange() {
    if (!this.el.nativeElement.value || this.el.nativeElement.value == "") {
      this._valueAccessor = this.ngControl.valueAccessor;
      if (this._valueAccessor['onChange']) {
        this._valueAccessor['onChange'](0);
      }

      if (this._valueAccessor['onTouched']) {
        this._valueAccessor['onTouched']();
      }
      this.el.nativeElement.value = "0";
    }
  }
}

import { Directive, ElementRef, HostListener, Input, OnInit, Optional } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Directive({
  selector: '[appOnlyNumber]'
})
export class OnlyNumberDirective implements OnInit {

  // Allow decimal numbers and negative values
  private regex: RegExp = new RegExp(/^^[0-9]*$/g);
  private _valueAccessor: any;
  @Input() maxLength: number = 10;
  // Allow key codes for special events. Reflect :
  // Backspace, tab, end, home
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];

  constructor(private el: ElementRef, @Optional() private ngControl: NgControl) {

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

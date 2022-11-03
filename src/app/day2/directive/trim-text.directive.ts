
import { Directive, ElementRef, HostListener, Input, OnInit, Optional } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Directive({
  selector: '[trimText]'
})
export class TrimTextDirective implements OnInit {

  // Allow decimal numbers and negative values
  private regex: RegExp = new RegExp(/^(?:[A-Za-z0-9]+)(?:[A-Za-z0-9 _()-.,'"&@\n]*)$/);
  private regex_text: RegExp = new RegExp(/^[a-zA-Z\s]$/);
  private _valueAccessor: any;
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home','Enter', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];
  @Input() convertEmptyToNull: string="";
  @Input() validText = '';
  constructor(private el: ElementRef,
    @Optional() private ngControl: NgControl) {
  }
  ngOnInit() {
    if (this.validText == 'text_only') {
      this.regex = this.regex_text;
    }
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
      if (check_max.length >= 480) {
        event.preventDefault();
      }
    }

  }
  @HostListener('change', ['$event'])
  onChange() {

    this._valueAccessor = this.ngControl.valueAccessor;
    let current: string = this.el.nativeElement.value;
    if (current && !String(current).match(this.regex)) {
      if (this._valueAccessor['onChange']) {
        this._valueAccessor['onChange'](null);
      }

      if (this._valueAccessor['onTouched']) {
        this._valueAccessor['onTouched']();
      }
      this.el.nativeElement.value = null;
    }
    else if (this.convertEmptyToNull == "yes" && (!this.el.nativeElement.value || this.el.nativeElement.value == "")) {
      if (this._valueAccessor['onChange']) {
        this._valueAccessor['onChange'](null);
      }

      if (this._valueAccessor['onTouched']) {
        this._valueAccessor['onTouched']();
      }
      this.el.nativeElement.value = null;
    } else if (this.el.nativeElement.value && this.el.nativeElement.value != "") {
      if (this._valueAccessor['onChange']) {
        this._valueAccessor['onChange'](this.el.nativeElement.value.trim());
      }

      if (this._valueAccessor['onTouched']) {
        this._valueAccessor['onTouched']();
      }
      this.el.nativeElement.value = this.el.nativeElement.value.trim();
    }

  }
}

import { Directive, ElementRef, inject, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
  standalone: true
})
export class AutoFocus {
  element = inject(ElementRef);

  ngAfterViewInit() {
    this.element.nativeElement.focus();
  }
}

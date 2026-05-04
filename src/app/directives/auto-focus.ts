import { Directive, ElementRef, inject } from '@angular/core';

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

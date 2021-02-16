import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  constructor(elementRef: ElementRef) {
      elementRef.nativeElement.style.background = '#' + (Math.floor(Math.random() * 900000) + 100000).toString();
  }

}

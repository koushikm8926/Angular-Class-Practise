import { Directive ,HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('focus') onFocus() {
    console.log('Input focused');
    this.changeBackgroundColor('Grey');  // Change background color on focus
  }
  // Listen for blur (when the element loses focus)
  @HostListener('blur') onBlur() {
    const input = this.el.nativeElement;
    if (input.classList.contains('ng-invalid')) {
      this.changeBackgroundColor('red');  // Set background color to red if invalid
    } else {
      this.changeBackgroundColor('white');  // Reset background color when valid
    }
  }

  private changeBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  private initialColor = '#f5f5f5';
  private defaultColor = '#009688';
  private defaultHeight = 180;

  constructor(private el: ElementRef) {
    this.setTransitions();
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
    this.setCursor();
  }

  @Input('appBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
    this.el.nativeElement.style.transform = 'scale3d(1.05,1.05,1)';
    this.el.nativeElement.style.zIndex = '1';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
    this.el.nativeElement.style.transform = 'none';
    this.el.nativeElement.style.zIndex = '0';
  }

  private setBorder(color: string) {
    this.el.nativeElement.style.border = 'solid 4px ' + color;
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
  }

  private setCursor() {
    this.el.nativeElement.style.cursor = 'pointer';
  }

  private setTransitions() {
    this.el.nativeElement.style.transition = 'transform 0.3s ease';
  }
}

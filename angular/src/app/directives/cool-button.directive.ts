import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[coolButton]'
})
export class CoolButtonDirective implements OnInit  {

  @HostListener('mouseenter')
  onMouseEnter() {
    this.changeButtonBgColor('red');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.changeButtonBgColor('darkred');
  }

  constructor(private el: ElementRef,
              private rend: Renderer2) { }

  ngOnInit() {
    this.changeButtonBgColor('darkred');
    // this.rend.setStyle(this.el.nativeElement, 'background', 'darkred')
    // this.el.nativeElement.style.backgroundImage = 'blue';
  }

  changeButtonBgColor(color: string) {
    this.rend.setStyle(this.el.nativeElement, 'background', color)
  }
}

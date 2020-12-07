import {
  Directive,
  Input,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appAos]',
})
export class AosDirective implements OnInit {
  @Input() aos: string = '';

  constructor(private eleRef: ElementRef) {}
  ngOnInit(): void {
    this.className = this.aos;
    if (this.isInViewport()) {
      this.className = this.aos + '-active';
    }
  }

  @HostBinding('class')
  className: string = this.aos;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    // if (!this.isInViewport()) {
    //   this.className = this.aos;
    // }
    if (this.isInViewport()) {
      this.className = this.aos + '-active';
    } else {
      this.className = this.aos;
    }
  }

  isInViewport() {
    const bounding = this.eleRef.nativeElement.getBoundingClientRect();

    const h = window.innerHeight || document.documentElement.clientHeight;
    return (
      bounding.top >= -h / 2 &&
      bounding.bottom <=
        this.eleRef.nativeElement.scrollHeight / 2 +
          (window.innerHeight || document.documentElement.clientHeight)
    );
  }
}

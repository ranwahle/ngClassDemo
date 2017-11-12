import {Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appMyNgClass]'
})
export class MyNgClassDirective implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    this.changeClass(this.myClass);
  }

  ngOnInit(): void {
    console.log('Directive initiated');
  }

  private _appNgClass: any;

  get myClass(): any {
    return this._appNgClass;
  }

  @Input('appMyNgClass')
  set myClass(value: any) {
    this._appNgClass = value;
    //this.changeClass(value);
  }

  private changeClass(value: any) {
    const keys = Object.keys(value);
    keys.forEach(key => {
      if (value[key]) {
        this.el.nativeElement.classList.add(key);
      } else {
        this.el.nativeElement.classList.remove(key);
      }
    });
  }

  constructor(private el: ElementRef) {
    // el.nativeElement.classList.
  }


}

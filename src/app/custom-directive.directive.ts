import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core'; // we import a lot extra here, is required for the functionality

@Directive({
  selector: '[appCustomDirective]'
})

export class CustomDirectiveDirective {

  constructor(private _elRef: ElementRef, private _renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    console.log("test mouse enter");
    this.border('lime', 'solid', '10px'); //border isn't working
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.border();
  }

  @HostListener('wheel', ['$event']) onWheel(event: any) {
    event.preventDefault();
    if(event.deltaY > 0){
      this.changeSize(-25);
    }
    if(event.deltaY < 0){
      this.changeSize(25);
    }
  }

  private border(
    color: string = null,
    type: string = null,
    width: string = null
  ){
    this._renderer.setStyle( // I think setElementStyle has been changed to setStyle
      this._elRef.nativeElement, 'border-color', color
    );
    this._renderer.setStyle( // I think setElementStyle has been changed to setStyle
      this._elRef.nativeElement, 'border-style', type
    );
    this._renderer.setStyle( // I think setElementStyle has been changed to setStyle
      this._elRef.nativeElement, 'border-width', width
    );
  }


  private changeSize(sizechange: any){
    console.log("test change size \n");
    let height: any = this._elRef.nativeElement.offsetHeight;
    let newHeight: any = height + sizechange;
    this._renderer.setStyle(
      this._elRef.nativeElement, 'height', newHeight + 'px'
    );
  }



}



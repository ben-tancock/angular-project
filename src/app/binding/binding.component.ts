import { Component, OnInit } from '@angular/core';

// because attribute and property binding look almost the exact same, we will only provide an example of one
@Component({
  selector: 'app-binding',
  template: `
    <img [src] = "myPic"/>
    <br>
    <button [disabled]="isEnabled">Click me</button><hr> 
    <button disabled = "{!isEnabled}">Click me</button><hr>
    <p [ngClass]="className">This is cool stuff</p>

    <div [class]="myCustomClass"></div>
    <span [class.redText]="isTrue">Hello my blue friend</span><br><br><br>

    <span [style.border]="myBorder">Hello there</span><br><br><br>
    <div [style.color]="twoColors ? 'blue' : 'forestgreen'">what color am I</div><br>
    <button (click)="changeColor()">click me</button><br><br>

    <div (mousemove)="move($event)">
      <img [src]="imageUrl"
        (mouseeneter)="mouseGoesIn()"
        (mouseleave)="mouseLeft()"
        (dbclick)="changeImg()" /><br>
        double click the image to change it<br>
        The mouse has {{mouse}}<hr>
      
      <button (click)="changeImg()">Change Picture</button><hr>
      <input (keyup)="onKeyup($event)"
        (keydown)="onKeydown($event)"
        (keypress)="keypress($event)"
        (blur)="underTheScope($event)"
        (focus)="underTheScope($event)">
        {{view}}
      <p>On key up: {{upValues}}</p>
      <p>On key down: {{downValues}}</p>
      <p>On key press: {{keypressValue}}</p>
      <p (mousemove)="move($event)">
        x coordinates: {{x}}<br>
        y coordinates: {{y}}
      </p>
    <div>
    `,
  styles: [`
    img {
      height: 300px;
      width: auto;
    }
    .myClass {
      color: red;
      font-size: 24px;
    }
    .blueBox {
      height: 150px;
      width: 150px;
      background-color: blue;
    }
    .redText {
      color: red;
      font-size: 24px;
    }
    `]
})
export class BindingComponent implements OnInit {
  myPic: string = "../assets/images/meme.jpg";
  isEnabled: boolean = false;
  className: string = "myClass";
  myCustomClass: string = 'blueBox';
  isTrue = true;
  twoColors:boolean = true;
  changeColor = function(){
    this.twoColors = !this.twoColors;
  }
  myBorder = "1px solid black";

  counter = 0;
  mouse: string;
  upValues: string = '';
  downValues: string = '';
  keypressValue: string = "";
  x: string = "";
  y: string = '';
  view: string = '';

  mouseGoesIn = function(){
    this.mouse = "entered";
  }

  mouseLeft = function(){
    this.mouse = "left";
  }
  
  imageArray: string[] = [
    "../assets/images/meme1.jpg",
    "../assets/images/meme2.jpg", 
    "../assets/images/meme3.jpg"
  ]

  imageUrl: string = this.imageArray[this.counter];
  changeImg = function(){
    console.log("test change img");
    if (this.counter < this.imageArray.length - 1){
      this.counter++;
    }else{
      this.counter = 0;
    }
    this.imageUrl=this.imageArray[this.counter];
  }

  onKeyup(event:any){
    this.upValues = event.key;
    this.upValues += event.target.value + ' | ';
  }

  onKeydown(event:any){
    this.downValues = event.key;
    this.downValues += event.target.value + ' | ';
  }

  keypress(event:any){
    this.keypressValue = event.key;
    //this.upValues += event.target.value + ' | ';
  }

  move(event:any){
    this.x = event.clientX;
    this.y = event.clientY;
  }

  underTheScope(event:any){
    if(event.type == "focus"){
      this.view = "the text box is focused";
    }
    else if (event.type == "blur"){
      this.view = "the input box is blurred";
    }
    console.log(event);
  }


  constructor() { }

  ngOnInit(): void {
  }

}

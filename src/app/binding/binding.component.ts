import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  template: `
    <img [src] = "myPic"/>
    <br>
    <button [disabled]="isEnabled">Click me</button><hr>
    <button disabled = "{!isEnabled}">Click me</button><hr>
    <p [ngClass]="className">This is cool stuff</p>
    `,
  styles: [`
    img {
      height: 100px;
      width: auto;
    }
    .myClass {
      color: red;
      font-size: 24px;
    }
    `]
})
export class BindingComponent implements OnInit {
  myPic: string = "../assets/images/meme.jpg";
  isEnabled: boolean = false;
  className: string = "myClass";

  constructor() { }

  ngOnInit(): void {
  }

}

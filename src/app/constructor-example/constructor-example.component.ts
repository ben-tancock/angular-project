import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'simple-constructor',
  template: `
    <p>Hello today is {{today}}!</p>`
  //styleUrls: ['./constructor-example.component.css']
})
export class ConstructorExampleComponent implements OnInit {
  today: Date;
  constructor() {
    this.today = new Date();
   }

  ngOnInit(): void {
  }

}

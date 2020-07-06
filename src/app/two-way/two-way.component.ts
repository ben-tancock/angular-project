
import { Component, OnInit } from '@angular/core';


// NOTE: in order to use two-way binding for form inputs you need to import the FormsModule package into your Angular module. 
// (put 'FormsModule' under the imports section in app.module.ts)
@Component({
  selector: 'app-two-way',
  template:`
    <input [(ngModel)]="text"><br>
    <input bindon-ngModel="text"><br>
    <input [value] = "text" (input)="text=$event.target.value"><br>
    <h1>{{text}}</h1>`,
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {
  text: string = "some text here";

  constructor() { }

  ngOnInit(): void {
  }

}

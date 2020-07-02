import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  template: `
    <myInput name ="Brendan" occupation="Student/Author"></myInput>
    <myInput name ="Brad" occupation="Student/Author"></myInput>
    <myInput name ="Caleb" occupation="Student/Author"></myInput>
    <myInput></myInput>
  `,
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'myInput',
  template: `
    <div>
      Name: {{personName}}
      <br>
      Job: {{occupation}}
    </div>
  `,
  styles: [`
    div {
      margin: 10px;
      padding: 15px;
      border: 3px solid grey;
    }
  `]
})
export class InputComponent implements OnInit {
  @Input('name') personName: string;
  @Input('occupation') occupation: string;

  constructor() {
    this.personName = "John Doe";
    this.occupation = "Anonymity";
  }

  ngOnInit(): void {
  }

}

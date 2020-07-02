import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nested',
  template: `
    <span>Congratulations I am a nested component</span>`,
  styles: [`
    span{
      color: #228b22
    }`
  ]
})
export class NestedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

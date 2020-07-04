import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'typescript-expressions',
  template: `
    <h1>Expressions</h1>
    Array:<br>
    {{myArr.join(',')}}<br/>
    <hr>
    Elements removed from the array: <br>
      {{removedArr.join(', ')}}<hr>
    <a (click)="myArr.push(myMath.floor(myMath.random()*100+1))">
      click to append a value to the array
    </a><hr>

    <a (click) = "removedArr.push(myArr.shift())">
      click to remove the first value in the array
    </a><hr>

    Size of Array:<br>
      {{myArr.length}}<hr>
  `,
  styles: [`
    a {
      color: blue;
      cursor: pointer;
    }
  `]
})
export class TypescriptExpressionsComponent implements OnInit {
  myMath = Math;
  myArr: number[] = [1];
  removedArr: number[] = [0];

  constructor() { }

  ngOnInit(): void {
  }

}

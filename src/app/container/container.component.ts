import { Component, OnInit, Input } from '@angular/core';
import { InputComponent } from '../input/input.component';

@Component({
  selector: '[container]',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}

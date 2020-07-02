import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-expressions',
  template: `
    Directly accessing variables in the Component:<br>
      {{speed}} {{vehicle}}<hr>
    Calling a function in the Component:<br>
      {{lower(speed)}} {{upper('Jeep')}}<hr>
    <a (click)="setValues('Fast', newVehicle)">
      Click to change to Fast {{newVehicle}}</a><hr>
    <a (click)="setValues(newSpeed, 'Rocket')">
      Click to change to {{newSpeed}} 'Rocket'</a><hr>
    <a (click)="vehicle='Car'">
      Click to change the vehicle to a Car</a><hr>
    <a (click)="vehicle='Enhanced ' + vehicle">
      Click to enhance the vehicle</a><hr>`,
  styles: ['a{color: blue; text-decoration: underline; cursor: pointer}']
})
export class ClassExpressionsComponent implements OnInit {
  speed = 'slow';
  vehicle = 'Train';
  newSpeed = 'Hypersonic';
  newVehicle = 'plane';
  upper = function(str: any){
    str = str.toUpperCase();
    return str;
  }

  lower = function(str: any){
    str = str.toLowerCase();
    return str;
  }

  setValues = function(speed: any, vehicle: any){
    this.speed = speed;
    this.vehicle = vehicle;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {

  condition: boolean = true;
  changeCondition = function(){
    this.condition = !this.condition;
  }

  changeDay = function(){
    this.time = 'day';
  }

  changeNight = function(){
    this.time = 'night';
  }

  people: string[] = ["Andrew", "Dillon", "Phillipe", "Susan"];

  monsters = [
    {name: "Nessie", location: "Loch Ness, Scotland"},
    {name: "Bigfoot", location: "Pacific Northwest, USA"},
    {name: "Godzilla", location: "Tokyo, Japan"}
  ];

  time: string = 'night';

  // attribute component variables / functions
  colors: string[] = ["red", "blue", "green", "yellow"];
  name: string;
  color: string = 'color';
  isDisabled: boolean = true;
  classes:string[] = ['bold', 'italic', 'highlight'];
  selectedClass:string[] = [];
  enabler(){
    this.isDisabled = !this.isDisabled;
  }
  addClass(event: any){
    this.selectedClass = [];
    var values = event.target.options;
    var opt: any;

    for(var i = 0; i < values.length; i++){
      opt = values[i];

      if(opt.selected){
        this.selectedClass.push(opt.text);
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}

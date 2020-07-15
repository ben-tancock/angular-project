import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.css']
})
export class CustomDirectiveComponent implements OnInit {
  images: string[] = ['../assets/images/meme.jpg', '../assets/images/meme1.jpg', '../assets/images/meme2.jpg', '../assets/images/meme3.jpg'];

  constructor() { }

  ngOnInit(): void {
  }

}

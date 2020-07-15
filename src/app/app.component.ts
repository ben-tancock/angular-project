import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';

  images: any = [
    {
      src: "../assets/images/meme3.jpg",
      title: "a slightly nervous doggo",
      description: "interesting"
    },

    {
      src: "../assets/images/meme1.jpg",
      title: "another slightly nervous doggo...",
      description: ":)"
    },

    {
      src: "../assets/images/meme2.jpg",
      title: "the final nervous doggo",
      description: "very good"
    }
  ]
}

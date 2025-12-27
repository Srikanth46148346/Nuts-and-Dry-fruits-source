import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nuts';
  backgroundImageUrl: any;

  ngOnInit(): void {
    // this.backgroundImageUrl = '../assets/icons/background2.jpg';
  }
}

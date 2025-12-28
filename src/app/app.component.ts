import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nuts';
  backgroundImageUrl: any;


  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          try {
            // @ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          } catch { }
        }, 500);
      }
    });
  }
  ngOnInit(): void {

  }
}

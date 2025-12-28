import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adds',
  templateUrl: './adds.component.html',
  styleUrls: ['./adds.component.css']
})
export class AddsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('Adsense error', e);
    }
  }

}

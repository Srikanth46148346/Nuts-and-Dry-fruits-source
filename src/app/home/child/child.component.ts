import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    if (changes.data){
      console.log('the data has been changed, so we are triggering this hook');
    } else{
      console.log('No changes has been made, so we are not triggering the ngOnChanges');
    }
  }
}

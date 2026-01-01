import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { HomeComponent } from '../home.component';
import { DataService } from 'src/app/myService/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {

  @Input() data: any;
  constructor(private myService: DataService) {  console.log('Child component constructor'); }

  anyData: any;
  mySubscription: any;

  ngOnInit(): void {
    console.log('Child component Initialization');
  }

  ngOnChanges(changes: SimpleChanges){
    if (changes.data){
      console.log('the data has been changed, so we are triggering this hook');
    } else{
      console.log('No changes has been made, so we are not triggering the ngOnChanges');
    }
  }

  handleViewChildDecorator(){
    console.log('We are accessing the child instance through @ViewChild decorator');
  }

  hanldeDestroy(){
  this.mySubscription = this.myService.currentData.subscribe((data) => {
      this.anyData = data;
    });
  console.log('data in the child component: ', this.mySubscription);
  }

  ngOnDestroy(){
    console.log('Child Component has been destroyed');
    this.mySubscription?.unSubscribe();
  }
}

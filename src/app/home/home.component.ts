import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../myService/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  data: any;
  userFormData: FormGroup;
  parentData = 'Data from Parent';
  mySubscription: any;
  private destroy = new Subject();
  isContentReady = false;

  @ViewChild(ChildComponent) child: ChildComponent;
  constructor(private dataService: DataService, private fb: FormBuilder, private cd: ChangeDetectorRef ) { }

  ngOnInit(): void {
    this.formInitialization();
    this.handleBehaviour();
    this.handleUpdateData();
    // this.handleIntervals();
    this.handleParentDataUpdate();

  }
  ngAfterViewInit(){
        this.child?.handleViewChildDecorator();
  }

  formInitialization(){
    this.userFormData = this.fb.group({
      type: [Validators.required],
      price: [Validators.required],
    });
  }
  handleBehaviour(){
     this.dataService.currentData.subscribe((a) => {
      console.log('My data from the behaviour subject: ');
      console.log(a);
      this.data = a;
      if (this.data && this.data.length > 3) {
      this.isContentReady = true;
    }
    });
  }

  handleUpdateData(){
    const someData: any = this.data.map(data => {
      data.type === 'Raisins' ? data.price = '100' : console.log('some different data');
    });
    // console.log('Some data :', someData);
  }

  // handleIntervals(){
  //   setTimeout(() => {
  //     console.log('Response after time is done');
  //     this.cd.detectChanges();
  //     this.cd.markForCheck();
  //     this.cd.detach();
  //     this.cd.reattach();
  //     this.cd.checkNoChanges();
  //   }, 4000);
  // }

  handleParentDataUpdate(){
    setTimeout(() => {
      this.parentData = this.parentData.concat(' Some data we have updated');
      console.log('Parent data after time out: ', this.parentData);
    }, 5000);
    console.log('Parent Data before timeout: ', this.parentData);
  }

  handleUnSubscription(){
    this.mySubscription = this.dataService.currentData.pipe(
      takeUntil(this.destroy)
    ).subscribe((data) => {
      this.data = data;
    });
  }
  ngOnDestroy(){
    console.log('Home page is being destroyed: ');
    this.destroy.next();
    this.destroy.complete();
  }
}


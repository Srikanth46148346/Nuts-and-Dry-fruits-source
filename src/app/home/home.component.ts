import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from '../myService/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  userFormData: FormGroup;
  parentData = 'Data from Parent';

  constructor(private dataService: DataService, private fb: FormBuilder, private cd: ChangeDetectorRef ) { }

  ngOnInit(): void {
    this.formInitialization();
    this.handleBehaviour();
    this.handleUpdateData();
    // this.handleIntervals();
    this.handleParentDataUpdate();

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
}

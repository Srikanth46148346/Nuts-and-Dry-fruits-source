import { Component, OnInit } from '@angular/core';
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

  constructor(private dataService: DataService, private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.formInitialization();
    this.handleBehaviour();
    this.handleUpdateData();

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

}

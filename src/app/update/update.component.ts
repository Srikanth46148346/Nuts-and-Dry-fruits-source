import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { data } from '../myService/data';
import { DataService } from '../myService/data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  formData: FormGroup;
  localData = data;

  constructor(private readonly fb: FormBuilder, private readonly dataService: DataService) { }

  ngOnInit(): void {
    data[0].price = '0';
    this.formInitialization();
    console.log('my local data: ', this.localData);

  }

  formInitialization(){
    this.formData = this.fb.group({
      type: [Validators.required],
      price : [Validators.required]
    });
  }

  updateData(){
    // data.map((data1) => {
    //   data1.type === 'Cashew' ? data1.price = '0' : data1.price = '99';
    // });
    this.dataService.updateData([
      {
        type : 'Cashew',
        content: 'The Energy Source High in magnesium and copper, cashews help convert food into energy and keep your bones strong.',
        image: '../assets/icons/cashew.jpg',
        price: '399'
    }
    ]);
  }

}

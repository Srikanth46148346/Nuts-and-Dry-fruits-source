import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../myService/data.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminForm: FormGroup;


  constructor(private readonly myService: DataService , private readonly fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.initializationFrom();
  }

  initializationFrom(){
    this.adminForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  handleSubmision(){
    console.log('admin form data: ', this.adminForm.value);
    this.myService.adminSubject.next([this.adminForm.value]);
    (this.adminForm.get('email').value === 'admin@gmail.com') ? this.route.navigate(['/update']) : this.route.navigate(['/home']);
  }
}

import { Injectable } from '@angular/core';
import { data } from './data';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private myBehaviourSub = new BehaviorSubject<any[]>(data);
  adminSubject = new BehaviorSubject([]);

  currentData = this.myBehaviourSub.asObservable();

  constructor() { }

  updateData(newData){
    this.myBehaviourSub.next(newData);
  }
  getMyData(){
    return data;
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminComponent } from '../admin/admin.component';
import { DataService } from '../myService/data.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  admin = {
    email : 'admin@gmail.com',
    password: 'test1214'
  };
  data: any;
  constructor(private readonly myService: DataService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.myService.adminSubject.subscribe((data) => {
      this.data = data;
    });
    if (this.data[0]?.email === this.admin.email){
      return true;
    } else {
      return false;
    }
  }

}

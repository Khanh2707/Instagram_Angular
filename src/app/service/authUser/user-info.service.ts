import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  userJSON: any = sessionStorage.getItem('user');
  user: any = JSON.parse(this.userJSON);

  private dataUser = new BehaviorSubject(this.user);
  currentUser = this.dataUser.asObservable();

  constructor() {}


}

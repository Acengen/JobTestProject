import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {
localAuth:boolean;

authEmitter = new EventEmitter<boolean>();
constructor() { }


Login() {
  JSON.stringify(localStorage.setItem("isAuth","true"))
  this.localAuth = JSON.parse(localStorage.getItem("isAuth"));
  this.authEmitter.emit(this.localAuth);
}

Logout() {
  localStorage.removeItem("isAuth");
  this.localAuth = JSON.parse(localStorage.getItem("isAuth"));
  this.authEmitter.emit(this.localAuth);
}


}

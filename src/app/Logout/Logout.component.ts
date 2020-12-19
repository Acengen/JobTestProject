import { FakeAuthService } from './../FakeAuth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Logout',
  templateUrl: './Logout.component.html',
  styleUrls: ['./Logout.component.scss']
})
export class LogoutComponent implements OnInit {
  isAuth:boolean;
  constructor(private authservice:FakeAuthService,private router:Router) { }

  ngOnInit() {
    this.isAuth = JSON.parse(localStorage.getItem('isAuth'));
    this.authservice.authEmitter.subscribe(auth => this.isAuth = auth);
  }

  Logout() {
    this.authservice.Logout();
    this.router.navigate(["/"]);
    this.isAuth = false;
    this.authservice.authEmitter.emit(this.isAuth)
  }
}

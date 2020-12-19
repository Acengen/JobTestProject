import { FakeAuthService } from './../FakeAuth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss']
})
export class LoginComponent implements OnInit {

  isAuth:boolean;

  constructor(private authService:FakeAuthService,private router:Router) { }

  ngOnInit() {
      this.authService.authEmitter.subscribe(auth => this.isAuth = auth);
  }
  
  Login() {
    this.authService.Login();
    if(this.isAuth){
      this.router.navigate(["/page1"])
    }
  }

  

}

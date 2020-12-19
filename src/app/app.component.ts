import { FakeAuthService } from './FakeAuth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'JbProject';
  constructor(private auth:FakeAuthService) {}
  ngOnInit() {
    const auth = JSON.parse(localStorage.getItem("isAuth"));
    if(auth){
      this.auth.localAuth = auth;
    }
  }
}

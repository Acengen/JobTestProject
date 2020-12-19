import { FakeAuthService } from './../FakeAuth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-NavBar',
  templateUrl: './NavBar.component.html',
  styleUrls: ['./NavBar.component.scss']
})
export class NavBarComponent implements OnInit {
  showNav:boolean = true;
  
  constructor(private authservice:FakeAuthService) { }

  ngOnInit() {
   
  }

  HideNav() {
    this.showNav = false;
  }

}

import { TableService } from './../Table.service';
import { FakeAuthService } from './../FakeAuth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-NavBar',
  templateUrl: './NavBar.component.html',
  styleUrls: ['./NavBar.component.scss']
})
export class NavBarComponent implements OnInit {
  showNav:boolean;
  
  constructor(private authservice:FakeAuthService,private service:TableService) { }

  ngOnInit() {
       this.showNav = this.service.showNav;
       this.service.showNavEmitter.subscribe(s => this.showNav = s);
  }

  HideNav() {
    this.showNav = false;
  }

}

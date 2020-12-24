import { NgForm } from '@angular/forms';
import { TableService } from './../../Table.service';
import { Component, OnInit } from '@angular/core';
import { Table } from 'src/app/Interfaces/tableInterface';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Data } from '@angular/router';

@Component({
  selector: '[app-Page1Item]',
  templateUrl: './Page1Item.component.html',
  styleUrls: ['./Page1Item.component.scss']
})
export class Page1ItemComponent implements OnInit {
  user:Table;
  edit:boolean;
  errorMsg:string;
  constructor(private tableservice:TableService,private route:ActivatedRoute) { }

  ngOnInit() {
     this.route.data.subscribe(
       (data:Data) => {
        this.user = data['data']
       }
     )
  }
  Update(f:NgForm) {
      this.tableservice.updateUser(this.user.id,f.value).subscribe(res => {
          
      },error => {
          this.errorMsg = "Something went wrong when updating"
      });      
  }
}

import { ActivatedRoute, Router, Data } from '@angular/router';
import { TableService } from './../../Table.service';
import { Component, OnInit } from '@angular/core';
import { Table } from 'src/app/Interfaces/tableInterface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-Add',
  templateUrl: './Add.component.html',
  styleUrls: ['./Add.component.scss']
})
export class AddComponent implements OnInit {
  userId:number[]= [1,2,3,4,5,6,7,8,9,10];
  default:number = 1;
  tableData:Table[] = [];

  constructor(private tableservice:TableService,private route:Router,private router:ActivatedRoute) { }

  ngOnInit() {
      this.router.data.subscribe(
        (data:Data) => {
          this.tableData = data['posts'];
        }
      )
  }

  Add(f:NgForm) {
    const userToPost = {
      title: f.value.Title,
      body:f.value.Body,
    }
      this.tableservice.postUser(userToPost).subscribe(res => {
        console.log("User added",res)
        f.reset();
        this.tableData.push(res)
        this.tableservice.tableDataEmitter.emit(this.tableData)
      });
  }
}

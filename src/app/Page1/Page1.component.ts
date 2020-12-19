import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TableService } from './../Table.service';
import { Component, OnInit } from '@angular/core';
import { Table } from '../Interfaces/tableInterface';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-Page1',
  templateUrl: './Page1.component.html',
  styleUrls: ['./Page1.component.scss']
})
export class Page1Component implements OnInit {
  TableData:Table[] = [];
  errorMsg = "";
  errorLoadingPosts:string;
  userId:number[]= [1,2,3,4,5,6,7,8,9,10];
  headers = ["Title","Body","UserId", "Actions"];
  returnedArray =[];
  filterArr = []
  
  isEddit:boolean;
  filterErrorMsg:string;
  showNav:boolean = false;

  
  constructor(private tableservice:TableService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.tableservice.isedditedEmitter.subscribe(e => this.isEddit = e);
    this.tableservice.getPosts().subscribe(
          (resdata:Table[]) => {
           for(let key in resdata){
             this.TableData.push(resdata[key])
           }
           this.tableservice.showNavEmitter.emit(this.showNav);
           this.returnedArray = this.TableData.slice(0,10);
          },
          error => {
            if(error){
              this.errorLoadingPosts = "Something want wrong!"
            }
          }
        );
    
    this.tableservice.tableData = this.TableData;
    this.tableservice.tableDataEmitter.subscribe(t => this.TableData = t);
  }

  
  deleteUser(id:number,index:number) {
    this.tableservice.deleteUser(id).subscribe(res => {
      console.log("delete request",res)
      this.TableData.splice(index,1);
    },error => {
        this.errorMsg = "Something went wrong when deleting"
    })
  }

  Edit() {
    this.isEddit = true;
    this.tableservice.isedditedEmitter.emit(this.isEddit);
  }

  // //paginations
  // pageChanged(event: PageChangedEvent): void {
  //   const startItem = (event.page - 1) * event.itemsPerPage;
  //   const endItem = event.page * event.itemsPerPage;
  //   this.returnedArray = this.TableData.slice(startItem, endItem);
  // }
  FilterData(f:NgForm) {
      let selecnumber = +f.value.filter;
      this.tableservice.filterData(selecnumber).subscribe(res => {
        this.TableData = res;
      },error => {
         if(error)
            this.filterErrorMsg = "Something went wrong when filtering";
          
      })
  }
}

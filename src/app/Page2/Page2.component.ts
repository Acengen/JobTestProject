import { NgForm } from '@angular/forms';
import { TableService } from './../Table.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Page2',
  templateUrl: './Page2.component.html',
  styleUrls: ['./Page2.component.scss']
})
export class Page2Component implements OnInit {
  photoGallery = [];
  searchText = ""
  constructor(private service:TableService) { }

  ngOnInit() {
    this.service.getPhotos().subscribe(res => {
      for(let key in res) {
          this.photoGallery.push(res[key]);
      }
    })
  }

  filterM(f:NgForm) {
       this.service.searchPhotos(f.value.search).subscribe((res) => {
        for(let key in res) {
          this.photoGallery = res[key]
      }
       })
  }
}

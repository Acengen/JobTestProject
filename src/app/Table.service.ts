import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Table } from './Interfaces/tableInterface';
@Injectable({
  providedIn: 'root'
})
export class TableService {
  
  constructor(private http:HttpClient) { }
  

  isEdditedProp:boolean;
  tableData:Table[] = [];
  showNav:boolean = true;

  showNavEmitter = new EventEmitter<boolean>();
  isedditedEmitter = new EventEmitter<boolean>();
  tableDataEmitter = new EventEmitter<Table[]>();

   isEddited(){
      this.isedditedEmitter.emit(this.isEdditedProp);
   }
  


  getPosts() {
    let headers = new HttpHeaders();
    headers = headers.append("CustomeHeader", "XYZ")
     return this.http.get<Table[]>("http://localhost:3000/posts",{headers:headers}).pipe(tap(res => {
       this.showNav = true;
       this.showNavEmitter.emit(this.showNav);
     }));
  }

  postUser(user:Table){
    return this.http.post<Table>("http://localhost:3000/posts", user);
  }
 
  deleteUser(id:number) {
    return this.http.delete<Table>("http://localhost:3000/posts/" + id);
  }

  getPost(id:number) {
    return this.http.get<Table>("http://localhost:3000/posts/" + id)
  }

  updateUser(userId:number,value:Table) {
    return this.http.patch<Table>("http://localhost:3000/posts/" + userId,value).pipe(tap(res => {
     
    }))
  }

  filterData(userId:number) {
    return this.http.get<Table[]>(`http://localhost:3000/posts?userId=${userId}`);
  }

  //Photos
  getPhotos() {   
    return this.http.get("https://api.unsplash.com/photos", {
      headers: {
        Authorization: "Client-ID V9xkL7heFvexEGozVHP7J5qBfwycifhxHY1ctY4bkGE"
      } 
    });
  }

  searchPhotos(srch:string) {
      return this.http.get(`https://api.unsplash.com/search/photos?query=${srch}`, {
        headers: {
          Authorization: "Client-ID V9xkL7heFvexEGozVHP7J5qBfwycifhxHY1ctY4bkGE"
        } 
      })
  }
}

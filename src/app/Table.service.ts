import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Table } from './Interfaces/tableInterface';
@Injectable({
  providedIn: 'root'
})
export class TableService {
  
  constructor(private http:HttpClient) { }
  isedditedEmitter = new EventEmitter<boolean>();

  isEdditedProp:boolean;
  tableData:Table[] = [];
  tableDataEmitter = new EventEmitter<Table[]>();

  userEmitter = new EventEmitter<Table>();

   isEddited(){
      this.isedditedEmitter.emit(this.isEdditedProp);
   }
  


  getPosts() {
    let headers = new HttpHeaders();
    headers = headers.append("CustomeHeader", "XYZ")
     return this.http.get<Table[]>("http://localhost:3000/posts",{headers:headers});
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

  updateUser(userId:number,value) {
    return this.http.patch("http://localhost:3000/posts/" + userId,value).pipe(tap(res => {
      this.userEmitter.emit(value);
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
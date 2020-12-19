import { TableService } from '../Table.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Table } from '../Interfaces/tableInterface';

@Injectable({
  providedIn: 'root'
})
export class PostsResolverService implements Resolve<Table[]> {

constructor(private service:TableService) { }

  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot) : Observable<Table[]> | Promise<Table[]> | Table[] {
    return this.service.getPosts()
  }

}

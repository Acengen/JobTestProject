import { FakeAuthService } from './FakeAuth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGGuard implements CanActivate {

  constructor(private authservice:FakeAuthService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     if(this.authservice.localAuth){
       return true;
     }else{
       return this.router.navigate(["/"]);
     }
  }
  
}

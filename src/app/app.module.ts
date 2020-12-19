
import { UserDataInterceptorService } from './Interceptors/UserDataInterceptor.service';
import {  routes } from './appRoute.routing';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { AppComponent } from './app.component';
import { LoginComponent } from './Login/Login.component';
import { UserDataComponent } from './UserData/UserData.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './NavBar/NavBar.component';
import { Page3Component } from './Page3/Page3.component';
import { Page4Component } from './Page4/Page4.component';
import { Page1Component } from './Page1/Page1.component';
import { Page2Component } from './Page2/Page2.component';
import { LogoutComponent } from './Logout/Logout.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Page1ItemComponent } from './Page1/Page1Item/Page1Item.component';
import { AddComponent } from './CRUD/Add/Add.component';
import { FilterPipe } from './Filter.pipe';

@NgModule({
  declarations: [									
    AppComponent,
    LoginComponent,
    UserDataComponent,
    NavBarComponent,
    Page3Component,
    Page4Component,
    Page1Component,
    Page2Component,
    LogoutComponent,
    AddComponent,
    Page1ItemComponent,
    FilterPipe
   ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    TooltipModule.forRoot(),
    HttpClientModule,
    PaginationModule.forRoot(),
    NoopAnimationsModule
  ],
  providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: UserDataInterceptorService,
    multi:true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }

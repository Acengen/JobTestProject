import { UpdateResolverService } from './reslovers/UpdateResolver.service';
import { Page1ItemComponent } from './Page1/Page1Item/Page1Item.component';
import { PostsResolverService } from './reslovers/PostsResolver.service';
import { AddComponent } from './CRUD/Add/Add.component';
import { AuthGGuard } from './auth-g.guard';
import { Page2Component } from './Page2/Page2.component';
import { Page1Component } from './Page1/Page1.component';
import { Page4Component } from './Page4/Page4.component';
import { Page3Component } from './Page3/Page3.component';
import { LoginComponent } from './Login/Login.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path:"", component:LoginComponent },
  {path: "page1", component:Page1Component, canActivate:[AuthGGuard], children:[
    {path:"add", component:AddComponent, resolve:{posts:PostsResolverService}},

    {path:":id", component:Page1ItemComponent, resolve:{data:UpdateResolverService}},

  ]},
  {path:"page2", component:Page2Component, canActivate:[AuthGGuard]},
  {path:"fake-page3", component:Page3Component, canActivate:[AuthGGuard]},
  {path:"fake-page4",component:Page4Component, canActivate:[AuthGGuard]}
];


import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs/operators";

export class UserDataInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler){
      console.log(req.headers)
      const modifyreq = req.clone({
        headers: req.headers.append('Access-Control-Allow-Origin','*')
      });
      return next.handle(modifyreq).pipe(tap(event => {
        if(event.type === HttpEventType.Response){
          //console.log(event)
        }
      }))
    }
}

import {  HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable()
export class peticionInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request URL'+req.url)

    let peticion= req.clone({
    setHeaders:{
      'Accept':'application/json',
      'Authorization': 'Bearer yhJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhc2ExNEBnbWFpbC5jb20iLCJpZCI6MSwiaWF0IjoxNzE4NTgyOTYwLCJleHAiOjE3MTg1ODM1NjV9.VbSKJHHYuIwaFkDELy6GDFOUDWPaNDdDFTOBFJJiCbk'
   }
  })
  return handler.handle(peticion).pipe(tap(()=>{},

  (error:any)=>{
    console.log("ERRORRRRRRR")
    if (error instanceof HttpErrorResponse){
      if(error.status!==401)
        {
          return
        }
    }
  }

));
}
}

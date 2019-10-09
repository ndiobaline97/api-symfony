import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpHeaders, HttpInterceptor } from '@angular/common/http';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class interceptorService implements HttpInterceptor{

  constructor(private injector:Injector ) { }
  intercept(req, next){
    let authservice = this.injector.get(AuthentificationService)
    let tokenizedReq = req.clone({
      setHeaders:{
        'Authorization': `Bearer ${authservice.loggedIn()}`
      }
    })
    return next.handle(tokenizedReq)
  }
} 
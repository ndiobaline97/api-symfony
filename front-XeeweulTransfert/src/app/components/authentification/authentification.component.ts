import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {  AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';
import{ JwtHelperService} from '@auth0/angular-jwt';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  loginUserData = {}
  jwt:string;
  username:string;
  roles: string;
  constructor(private _auth:AuthentificationService,
              private _router: Router) { }

  ngOnInit() {
  }

  loginUser () { 
     this._auth.loginUser(this.loginUserData)
     .subscribe(
       res =>  {
        console.log(res)
        let jwt=res.token;
        this._auth.saveToken(jwt);
     
         if(this.isAdmin()){
          this._router.navigate(["/register"])
         } else if(this.isAdminP()){
          this._router.navigate(["/ajouteruser"])
         }
         else if(this.isCaissier()){
          this._router.navigate(["/depot"])
         }
         else if(this.isUser()){
          this._router.navigate(["/envoie"])
         }
         
       },
       err => {
         if(err instanceof HttpErrorResponse){   
         if(err.status === 401){
           this._router.navigate(['/login'])
         }
       }
     }
     )
   }

   isAdmin(){
    return this._auth.isAdmin();
  }

  isUser(){
    return this._auth.isUser();
  }

  isAdminP(){
    return this._auth.isAdminP();
  }

  isCaissier(){
    return this._auth.isCaissier();
  }

  isAuthenticated(){
    return this._auth.isAuthenticated()
  }
  
}
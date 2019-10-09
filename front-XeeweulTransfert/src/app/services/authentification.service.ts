import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  jwt:string;
  username:string;
  roles:string;

  constructor(private http:HttpClient ,private router: Router
    ) { }
  private _loginUrl = "http://127.0.0.1:8000/api/login";
  
  loginUser(user)
  {

    return this.http.post<any>(this._loginUrl,user)
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  logout(){
    localStorage.removeItem('token');
   this.initParams();
   return  this.router.navigate(['/authentification']);
  }
  parseJWT(){
    let jwtHelper= new JwtHelperService();
    let obJWT=jwtHelper.decodeToken(this.jwt);
   
    this.username=obJWT.username;
    //console.log(obJWT.roles);
    this.roles=obJWT.roles;
    //stocker le role et le username sur localstorage
    localStorage.setItem('roles',this.roles);
    localStorage.setItem('username',this.username);
  }

  initParams(){
    this.jwt=undefined;
   this.username=undefined;
    this.roles=undefined;
  }

  getToken() {

    return localStorage.getItem('token')
  }
  saveToken(jwt:string){
    localStorage.setItem("token",jwt);
    this.jwt = jwt;
    this.parseJWT();
  }

  getRole(){
    return localStorage.getItem('role');
  }

  isAdmin(){
    if(localStorage.getItem('roles')=='ROLE_SUPER_ADMIN')
    return true;
  }
  isCaissier(){
    if(localStorage.getItem('roles')=='ROLE_CAISSIER')
    return true;
   }

    isAdminP(){
      if(localStorage.getItem('roles')=='ROLE_ADMIN_PARTENAIRE')
      return true;
      }

  isUser(){
    if(localStorage.getItem('roles')=='ROLE_USER')
    return true;
  }
  isAuthenticated(){
   return this.roles &&( this.isAdmin() || this.isUser() || this.isAdminP() || this.isCaissier() );
  }
 
}
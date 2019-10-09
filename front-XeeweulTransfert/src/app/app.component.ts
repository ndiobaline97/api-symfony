import { Component } from '@angular/core';
import { AuthentificationService } from './services/authentification.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xeweulTransfert';
  constructor(private http: HttpClient, private authentificationService: AuthentificationService) { }

  isAdmin(){
    return this.authentificationService.isAdmin();
  }

  isUser(){
    return this.authentificationService.isUser();
  }

  isAdminP(){
    return this.authentificationService.isAdminP();
  }

  isCaissier(){
    return this.authentificationService.isCaissier();
  }

  isAuthenticated(){
    return this.authentificationService.isAuthenticated()
  }
  logOut(){
    this.authentificationService.logout();
  }

  
}

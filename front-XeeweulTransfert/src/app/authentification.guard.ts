import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { AuthentificationService } from './services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard implements  CanActivate{
  constructor(private _authentificationService: AuthentificationService,
    private _router: Router){ }

    canActivate(): boolean{
      if(this._authentificationService.loggedIn()) { 
      return true
    } else {
     this._router.navigate(['/authentification'])
     return false;
    }
    } 
}

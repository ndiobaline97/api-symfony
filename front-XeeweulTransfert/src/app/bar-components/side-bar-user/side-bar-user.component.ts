import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-side-bar-user',
  templateUrl: './side-bar-user.component.html',
  styleUrls: ['./side-bar-user.component.css']
})
export class SideBarUserComponent implements OnInit {

  constructor(private transaction:AuthentificationService ) { }

  ngOnInit() {

  }

  logout(){
    this.transaction.logout();
    this.transaction.loggedIn();
  }

}

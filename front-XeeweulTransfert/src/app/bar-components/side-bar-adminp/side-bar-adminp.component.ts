import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-side-bar-adminp',
  templateUrl: './side-bar-adminp.component.html',
  styleUrls: ['./side-bar-adminp.component.css']
})
export class SideBarAdminpComponent implements OnInit {
  
  constructor(private transaction:AuthentificationService ) { }

  ngOnInit() {

  }

  logout(){
    this.transaction.logout();
    this.transaction.loggedIn();
  }
}

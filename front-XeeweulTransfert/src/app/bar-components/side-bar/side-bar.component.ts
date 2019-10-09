import { Component, OnInit } from '@angular/core';
import { GestionService } from 'src/app/services/gestion.service';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private transaction:AuthentificationService ) { }

  ngOnInit() {

  }

  logout(){
    this.transaction.logout();
    this.transaction.loggedIn();
  }

}

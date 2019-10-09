import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-side-bar-caissier',
  templateUrl: './side-bar-caissier.component.html',
  styleUrls: ['./side-bar-caissier.component.css']
})
export class SideBarCaissierComponent implements OnInit {

  constructor(private transaction:AuthentificationService ) { }

  ngOnInit() {

  }

  logout(){
    this.transaction.logout();
    this.transaction.loggedIn();
  }

}

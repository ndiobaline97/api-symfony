import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter-compte',
  templateUrl: './ajouter-compte.component.html',
  styleUrls: ['./ajouter-compte.component.css']
})
export class AjouterCompteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addCompteUser(data){
    const host = "http://localhost:8000/api/newcompte";
    console.log(data);
    const formData: FormData= new FormData();
   formData.append('username', data.username);
   formData.append('compte', data.compte);

}
}

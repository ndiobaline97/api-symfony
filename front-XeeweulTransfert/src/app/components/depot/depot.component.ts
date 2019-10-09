import { Component, OnInit } from '@angular/core';
import { GestionService } from 'src/app/services/gestion.service';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {
compte;
  constructor(private account:GestionService) { }

  ngOnInit() {
  }

  submitcompte (data:any){
    console.log(data);
         this.account.rechercheCompte(data)
     .subscribe(
       data=>{
        console.log('code valide');
        this.compte=data
      
       }, err=>{
        console.log(err);
       }
     )
   }
}

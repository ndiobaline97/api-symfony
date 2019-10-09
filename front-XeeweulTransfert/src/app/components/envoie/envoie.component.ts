import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-envoie',
  templateUrl: './envoie.component.html',
  styleUrls: ['./envoie.component.css']
})
export class EnvoieComponent implements OnInit {

  constructor(private transaction : TransactionService) { }

  ngOnInit() {
  }

  onsubmit (data:any){
    console.log(data);
         this.transaction.envoie(data)
     .subscribe(
       data=>{
         console.log('L\'envoie à été bien efféctué');
        
          Swal.fire({
            type: 'success',
            title: 'ENVOIE REUSSI',
            showConfirmButton: true,
          })

       }, err=>{
        console.log(err);
        Swal.fire({
          type: 'error',
          text: 'ERREUR VERIFIER TOUS LES CHAMPS',
        })
      
       }
     )
   }

}

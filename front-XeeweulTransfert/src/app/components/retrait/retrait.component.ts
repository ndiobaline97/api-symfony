import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.css']
})
export class RetraitComponent implements OnInit {
  affiche = false;
  private err;
   constructor(private transaction : TransactionService) { }
  codeEnvoie;
  private recup;
  ngOnInit() {
  }
  
  rechercheCode(donnee:any){
         this.transaction.rechercheCode(donnee)
     .subscribe(
       data=>{
       console.log(data);
        this.codeEnvoie=data
        console.log(this.codeEnvoie.nomE);
        Swal.fire({
          type: 'info',
          title: '<h2> Infos Transaction </h2><hr/>',
          html: 
                '<h5>***********Expediteur************</h5>'
                +'<p> Nom : '+this.codeEnvoie.nomE+'<br>'
                +'prenom: '+this.codeEnvoie.prenomE+'<br>'
                +'Adresse: '+this.codeEnvoie.adresse+'<br>'
                +'Montant : '+this.codeEnvoie.montant+'<br> </p>'
                +'<h5>*********Bénéficiaire***********</h5>'
                +'<p> Prenom : '+this.codeEnvoie.prenomB+'<br>'
                +'<p> Nom : '+this.codeEnvoie.nomB+'<br>'
                +'Adresse : '+this.codeEnvoie.adresseB+'<br>'
                +'Téléphone : '+this.codeEnvoie.telephoneB+'<br>'
                +'Code d\'envoi : '+this.codeEnvoie.codeEnvoie+'<br>',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Continuez vers le retrait'
              }).then((result) => {
                if (result.value) {
                  this.affiche = true;
                }
              })
            
            }, err=>{
              console.log(err);
              this.err = err.error.text
          console.log(this.err)
          if(this.err.search('Ce code est invalide')>=0){
            Swal.fire(
                'Erreur',
                'Ce code n\'existe pas vérifiez l\'entrée !',
                'error'
              )
            } else if(this.err.search('Le code est déja retiré')>=0){
              Swal.fire(
                  'Attention',
                  'Ce code est déja retiré !',
                  'warning'
                )}   
            }
          )
        } 
        retrait(data){
          this.transaction.retrait(data)
          .subscribe(
            data=>{
              console.log(data)
              this.recup = data;
              Swal.fire({
                type: 'info',
                title: '<h2> Infos Transaction </h2><hr/>',
                html: 
                '<h5>***********Expediteur************</h5>'
                +'<p> Nom : '+this.recup.nomE+'<br>'
                +'prenom: '+this.recup.prenomE+'<br>'
                +'Adresse: '+this.recup.adresse+'<br>'
                +'Montant : '+this.recup.montant+'<br> </p>'
                +'<h5>*********Bénéficiaire***********</h5>'
                +'<p> Prenom : '+this.recup.prenomB+'<br>'
                +'<p> Nom : '+this.recup.nomB+'<br>'
                +'Adresse : '+this.recup.adresseB+'<br>'
                +'Téléphone : '+this.recup.telephoneB+'<br>'
                +'Code d\'envoi : '+this.recup.codeEnvoie+'<br>'
                +'date retrait : '+this.recup.dateRetrait+'<br>',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Imprimez reçu'
              })
            },
            err=>{
              console.log(err)
              Swal.fire(
                'Erreur',
                'Erreur',
                'error'
              )
            }
          )

        }
}


import { Component, OnInit } from '@angular/core';
import { PartenaireService } from 'src/app/services/partenaire.service';
import { AuthentificationService } from 'src/app/services/authentification.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Partenaire = {} ;
  imageUrl: string="/assets/assets/img/image.jpg";
  fileToUpload: File=null;
    constructor(private partenairesService :PartenaireService , private authService :AuthentificationService ,private router: Router) { }

    ngOnInit() {
    }
    

    handleFileInput(File : FileList){
      this.fileToUpload=File.item(0);
     var reader= new FileReader();
     reader.onload=(event:any)=>{
       this.imageUrl=event.target.result;

     }
     reader.readAsDataURL(this.fileToUpload);
    } 

    onsubmit (data:any){
      console.log(data);
      this.partenairesService.addPartenaire(data, this.fileToUpload)
      Swal.fire({
        type: 'success',
        title: 'AJOUT PARTENAIRE REUSSI',
        showConfirmButton: true,
      })
       .subscribe(
         data=>{
           console.log('Le partenaire ajoute avec succes')

         }, err=>{
          console.log(err);
          Swal.fire({
            type: 'error',
            text: 'ERREUR VERIFIEZ TOUS LES CHAMPS',
          })
        
         }
       )
     }

}

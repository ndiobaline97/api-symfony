import { Component, OnInit } from '@angular/core';
import { PartenaireService } from 'src/app/services/partenaire.service';
import { AuthentificationService } from 'src/app/services/authentification.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouteruser',
  templateUrl: './ajouteruser.component.html',
  styleUrls: ['./ajouteruser.component.css']
})
export class AjouteruserComponent implements OnInit {
  Partenaire = {} ;
  imageUrl: string="/assets/assets/img/image.jpg";
  fileToUpload: File=null;
  profils=[];
    constructor(private partenairesService :PartenaireService , private authService :AuthentificationService ,private router: Router) { }

    ngOnInit() {
      this.partenairesService.getAllProfil().subscribe(
        res=>{
          console.log(res);
          this.profils=res
          if (this.authService.getRole()=='ROLE_SUPER_ADMIN'){
             this.profils=[this.profils[3],this.profils[4] ]
          }else if (this.authService.getRole()=='ROLE_ADMIN_PARTENAIRE'){
            this.profils=[this.profils[2]]
         }
  
        }, err=>{
          console.log(err);
        }
      ) 
      
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
      this.partenairesService.addUser(data, this.fileToUpload)
       .subscribe(
         data=>{
           console.log(data);
          Swal.fire({
            type: 'error',
            title: 'ERREUR VERIFIEZ TOUS LES CHAMPS',
            showConfirmButton: true,
          })
           console.log('L\'utilisateur à été ajoute avec succès');

         }, err=>{
          console.log(err);
          Swal.fire({
            type: 'success',
            text: 'AJOUT UTILISATEUR REUSSI',
          })
        
         }
       )
     }
   
}

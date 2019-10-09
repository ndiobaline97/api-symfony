import { Component, OnInit } from '@angular/core';
import { GestionService } from 'src/app/services/gestion.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-listepartenaire',
  templateUrl: './listepartenaire.component.html',
  styleUrls: ['./listepartenaire.component.css']
})
export class ListepartenaireComponent implements OnInit {

  
  constructor(private partenaire:GestionService) { }

  
  public partenaires = [];
  etat;
  
  ngOnInit() {

    this.partenaire.getPartenaire()
    .subscribe(
      res=>this.partenaires = res,
      err =>console.error(err)
    );
  }

  block(id: number) {

    this.partenaire.blockerp(id).subscribe(

    resp=>{

      this.etat = resp,
      this.ngOnInit();
      Swal.fire({
        type: 'success',
        title: 'effectif',

      })

      }, err=>{
        console.log(err);
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        })

        Toast.fire({
          type: 'success',
          title: 'statut updated'
        })

        this.ngOnInit();
      }
    )

  }

}

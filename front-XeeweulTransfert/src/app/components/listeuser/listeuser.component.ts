import { Component, OnInit } from '@angular/core';
import { GestionService } from 'src/app/services/gestion.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-listeuser',
  templateUrl: './listeuser.component.html',
  styleUrls: ['./listeuser.component.css']
})
export class ListeuserComponent implements OnInit {

  constructor(private user:GestionService) { }

  
  public users = [];
  etat;
  
  ngOnInit() {

    this.user.getAlluser()
    .subscribe(
      res=>this.users = res,
      err =>console.error(err)
    );
  }

  blocker(id: number) {

    this.user.blocker(id).subscribe(

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

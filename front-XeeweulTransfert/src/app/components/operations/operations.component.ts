import { Component, OnInit } from '@angular/core';
import { GestionService } from 'src/app/services/gestion.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

  constructor(private transaction:GestionService) { }


  
  public operations = [];
  
  ngOnInit() {

    this.transaction.getOperation()
    .subscribe(
      res=>{this.operations = res
        console.log(this.operations)
      },
      err =>console.error(err)
    );
  }
}
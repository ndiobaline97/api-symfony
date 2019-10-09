import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
   constructor( private http:HttpClient) { }

  envoie(envoye){
    const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));

    const host = "http://localhost:8000/api/envoie";
  
    const formData: FormData= new FormData();
    formData.append('nomE', envoye.nomE);
    formData.append('prenomE', envoye.prenomE);
    formData.append('typePiece', envoye.typePiece);
    formData.append('numPiece', envoye.numPiece);
    formData.append('telephoneE', envoye.telephoneE);
    formData.append('montant', envoye.montant);
    formData.append('prenomB', envoye.prenomB);
    formData.append('nomB', envoye.nomB);
    formData.append('telephoneB', envoye.telephoneB);


      return this.http.post(host, formData, {headers : headers});
  }
  retrait (retrait){
    const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    const host = "http://localhost:8000/api/retrait";
    const formData: FormData= new FormData();
    formData.append('nomE', retrait.nomE);
    formData.append('prenomE', retrait.prenomE);
    formData.append('telephoneE', retrait.telephoneE);
    formData.append('codeEnvoie', retrait.codeEnvoie);
    formData.append('typePieceB', retrait.typePieceB);
    formData.append('numPieceB', retrait.numPieceB);

      return this.http.post(host, formData , {headers : headers});
  } 
  private recherchecode:string = "http://localhost:8000/api/recherchecodeEnvoie";

  rechercheCode(data) : Observable<any[]>  {
    const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    return  this.http.post<any>(this.recherchecode,data , {headers : headers});
   }
}

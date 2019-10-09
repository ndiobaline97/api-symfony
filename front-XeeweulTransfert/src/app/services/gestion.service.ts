import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GestionService {
  public host :string = "http://localhost:8000/api/listeUser";

  public listePartenaire : string =" http://localhost:8000/api/listePartenaire";

  public recherchecompte : string =" http://localhost:8000/api/showcompte";

  public operation : string ="http://localhost:8000/api/listeoperation";


  private Headers:any ={headers: new HttpHeaders().set("Authorization", "Bearer "+localStorage.getItem('token'))};
  
  constructor(private http : HttpClient, private gestionService: GestionService,
    private router: Router) { }

  getAlluser() :Observable<any>{
    var Headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    return this.http.get<any>(this.host ,{headers: Headers} );
  }

  getPartenaire() :Observable<any>{
    var Headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    return this.http.get<any>(this.listePartenaire ,{headers: Headers} );
  }

  getOperation() :Observable<any>{
    var Headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    return this.http.get<any>(this.operation ,{headers: Headers} );
  }

  blocker(id: number) {
    const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
  
  
    const hostbloc ="http://localhost:8000/api/userblock/"+id;
  
  
  
    return this.http.get(hostbloc , {headers : headers} );
  
  }

  blockerp(id: number) {
    const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
  
    const hostbloc ="http://localhost:8000/apibloquerpartenaire/"+id;
  
    return this.http.get(hostbloc , {headers : headers} );
  
  }

  addPartenaire(partenaire, fileToUpload){

    const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));

    const host = "http://localhost:8000/api/newuser";
    const formData: FormData= new FormData();
    formData.append('username', partenaire.username);  
    formData.append('plainPassword', partenaire.plainPassword);
    formData.append('roles', partenaire.roles);    
    formData.append('profile', partenaire.profile);
    formData.append('imageName', fileToUpload, fileToUpload.name);

    return this.http.post(host, formData , {headers : headers});
  }

  rechercheCompte(data) : Observable<any[]>  {
    var headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    return  this.http.post<any>(this.recherchecompte,data, {headers : headers});
   }

   addCompteUser(data){
    const host = "http://localhost:8000/api/newcompte";
    console.log(data);
    const formData: FormData= new FormData();
   formData.append('username', data.username);
   formData.append('compte', data.compte);
    return this.http.post(host, formData);
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { SideBarComponent } from './bar-components/side-bar/side-bar.component';
import { NavBarComponent } from './bar-components/nav-bar/nav-bar.component';
import { FooterComponent } from './bar-components/footer/footer.component';
import { AuthentificationGuard } from './authentification.guard';
import { AuthentificationService } from './services/authentification.service';
import { RegisterComponent } from './components/register/register.component';
import { ListepartenaireComponent } from './components/listepartenaire/listepartenaire.component';
import { AjouterCompteComponent } from './components/ajouter-compte/ajouter-compte.component';
import { SideBarAdminpComponent } from './bar-components/side-bar-adminp/side-bar-adminp.component';
import { AjouteruserComponent } from './components/ajouteruser/ajouteruser.component';
import { ListeuserComponent } from './components/listeuser/listeuser.component';
import { ListeoperationComponent } from './components/listeoperation/listeoperation.component';
import { SideBarCaissierComponent } from './bar-components/side-bar-caissier/side-bar-caissier.component';
import { DepotComponent } from './components/depot/depot.component';
import { SideBarUserComponent } from './bar-components/side-bar-user/side-bar-user.component';
import { EnvoieComponent } from './components/envoie/envoie.component';
import { RetraitComponent } from './components/retrait/retrait.component';
import { OperationsComponent } from './components/operations/operations.component';
import { GestionService } from './services/gestion.service';
import { CommonModule } from '@angular/common';
import { PartenaireService } from './services/partenaire.service';


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    SideBarComponent,
    NavBarComponent,
    FooterComponent,
    RegisterComponent,
    ListepartenaireComponent,
    AjouterCompteComponent,
    SideBarAdminpComponent,
    AjouteruserComponent,
    ListeuserComponent,
    ListeoperationComponent,
    SideBarCaissierComponent,
    DepotComponent,
    SideBarUserComponent,
    EnvoieComponent,
    RetraitComponent,
    OperationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [AuthentificationService,
    AuthentificationGuard

   ],
  bootstrap: [AppComponent]
})
export class AppModule { }

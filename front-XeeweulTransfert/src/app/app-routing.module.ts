import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideBarComponent } from './bar-components/side-bar/side-bar.component';
import { NavBarComponent } from './bar-components/nav-bar/nav-bar.component';
import { FooterComponent } from './bar-components/footer/footer.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { RegisterComponent } from './components/register/register.component';
import { ListepartenaireComponent } from './components/listepartenaire/listepartenaire.component';
import { AjouterCompteComponent } from './components/ajouter-compte/ajouter-compte.component';
import { AjouteruserComponent } from './components/ajouteruser/ajouteruser.component';
import { ListeuserComponent } from './components/listeuser/listeuser.component';
import { ListeoperationComponent } from './components/listeoperation/listeoperation.component';
import { DepotComponent } from './components/depot/depot.component';
import { EnvoieComponent } from './components/envoie/envoie.component';
import { RetraitComponent } from './components/retrait/retrait.component';
import { OperationsComponent } from './components/operations/operations.component';
import { AuthentificationGuard } from './authentification.guard';

const routes: Routes = [ 
  { path: '', redirectTo: '/authentification', pathMatch: 'full' },
  { path: 'authentification', component: AuthentificationComponent},
  { path: 'register', component: RegisterComponent,canActivate: [AuthentificationGuard]},
  { path: 'side-bar',  component: SideBarComponent},
  { path: 'nav-bar', component: NavBarComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'listepartenaire', component: ListepartenaireComponent},
  { path: 'ajoutercompte', component: AjouterCompteComponent},
  { path: 'ajouteruser', component: AjouteruserComponent},
  { path: 'listeuser', component: ListeuserComponent},
  { path: 'listeoperation', component: ListeoperationComponent},
  { path: 'depot', component: DepotComponent},
  { path: 'envoie', component: EnvoieComponent},
  { path: 'retrait', component: RetraitComponent},
  { path: 'operations', component: OperationsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }

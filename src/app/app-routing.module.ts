import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { UsuarioComponent } from './modules/usuario/usuario.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ProfissionalComponent } from './modules/profissional/profissional.component';
import { SolicitacoesComponent } from './modules/solicitacoes/solicitacoes.component';
import { AlertasComponent } from './modules/alertas/alertas.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profissional', component: ProfissionalComponent },
  { path: 'solicitacoes', component: SolicitacoesComponent },
  { path: 'alertas', component: AlertasComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

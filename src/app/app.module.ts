import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './modules/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { UsuarioComponent } from './modules/usuario/usuario.component';
import { ProfissionalComponent } from './modules/profissional/profissional.component';
import { SolicitacoesComponent } from './modules/solicitacoes/solicitacoes.component';
import { AlertasComponent } from './modules/alertas/alertas.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, UsuarioComponent, ProfissionalComponent, SolicitacoesComponent, AlertasComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

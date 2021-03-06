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
import { CardComponent } from './widgets/card/card.component';
import { AlertaDialogComponent } from './widgets/dialogs/alerta-dialog/alerta-dialog.component';
import { ConsultaDialogComponent } from './widgets/dialogs/consulta-dialog/consulta-dialog.component';
import { MapComponent } from './modules/map/map.component';
import { DiagnosticoComponent } from './modules/diagnostico/diagnostico.component';
import { ChatComponent } from './modules/chat/chat.component';
import { VideoCallComponent } from './modules/video-call/video-call.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UsuarioComponent,
    ProfissionalComponent,
    SolicitacoesComponent,
    AlertasComponent,
    CardComponent,
    AlertaDialogComponent,
    ConsultaDialogComponent,
    MapComponent,
    DiagnosticoComponent,
    ChatComponent,
    VideoCallComponent
  ],
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

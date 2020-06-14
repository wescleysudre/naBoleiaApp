import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Consultas } from 'src/app/models/consultas';
import { ConsultasService } from 'src/app/services/consultas/consultas.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConsultaDialogComponent } from 'src/app/widgets/dialogs/consulta-dialog/consulta-dialog.component';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.component.html',
  styleUrls: ['./solicitacoes.component.scss']
})
export class SolicitacoesComponent implements OnInit {

  consultas$: Observable<Consultas[]>;

  constructor(
    private consultasService: ConsultasService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.consultas$ = this.consultasService.consultas$;
  }

  goDetails(i: number, consulta: Consultas) {

  }

  openDialog(consulta: Consultas): void {
    const dialogRef = this.dialog.open(ConsultaDialogComponent, {
      width: '600px',
      data: consulta
    })
  }

}

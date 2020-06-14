import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Incidentes } from 'src/app/models/incidentes';
import { IncidentesService } from 'src/app/services/incidentes/incidentes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.scss']
})
export class AlertasComponent implements OnInit {

  alertas$: Observable<Incidentes[]>;

  constructor(
    private incidentesService: IncidentesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.alertas$ = this.incidentesService.incidentes$;
  }

  goDetails(i: number, incidente: Incidentes) {

  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Incidentes } from 'src/app/models/incidentes';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IncidentesService {

  private incidentesSubject$: BehaviorSubject<Incidentes[]> = new BehaviorSubject<Incidentes[]>([]);

  public incidentes$ = this.incidentesSubject$.asObservable();

  constructor() {
    timer(500)
      .subscribe(() => {
        this.incidentesSubject$.next([
          { caminhoneiro: 'Ricardo Quaresma', tipo: 'Pane Mecânica', data: '14/06/2020 às 13 hrs 30 min.' },
          { caminhoneiro: 'Manoel Pepe', tipo: 'Segurança', data: '14/06/2020 às 14 hrs 30 min.' },
          { caminhoneiro: 'Bernardo Campos', tipo: 'Acidente', data: '14/06/2020 às 11 hrs 30 min.' },
          { caminhoneiro: 'Cristiano Ronaldo', tipo: 'Pane Mecânica', data: '14/06/2020 às 15 hrs 35 min.' },
          { caminhoneiro: 'João Félix', tipo: 'Acidente', data: '14/06/2020 às 13 hrs 30 min.' },
        ])
      })
  }

  get(i: number): Observable<Incidentes> {
    return this.incidentes$.pipe(
      map(incidente => (i >= 0 && i < incidente.length) ? incidente[i] : null),
      delay(500)
    )
  }
}

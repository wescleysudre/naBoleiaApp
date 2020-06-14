import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Consultas } from 'src/app/models/consultas';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  private consultaSubject$: BehaviorSubject<Consultas[]> = new BehaviorSubject<Consultas[]>([]);

  public consultas$ = this.consultaSubject$.asObservable();

  constructor() {
    timer(1000)
      .subscribe(() => {
        this.consultaSubject$.next([
          {
            caminhoneiro: 'João Moutinho',
            reclamacao: 'Problema 1',
            tipoSanquineo: 'A',
            fumante: false,
            obeso: false,
            drogas: false,
            alcool: false,
            coracao: true,
            diabetico: true,
            cirurgia: false,
            insonia: true,
            exercicios: true,
            fisico: false,
            psicologico: true,
            especialidade: 'Psicólogo'
          },
          {
            caminhoneiro: 'Miguel Veloso',
            reclamacao: 'Problema 2',
            tipoSanquineo: 'A',
            fumante: false,
            obeso: false,
            drogas: false,
            alcool: false,
            coracao: true,
            diabetico: true,
            cirurgia: false,
            insonia: true,
            exercicios: true,
            fisico: false,
            psicologico: true,
            especialidade: 'Médico'
          },
          {
            caminhoneiro: 'Ricardo Carvalho',
            reclamacao: 'Problema 3',
            tipoSanquineo: 'A',
            fumante: false,
            obeso: false,
            drogas: false,
            alcool: false,
            coracao: true,
            diabetico: true,
            cirurgia: false,
            insonia: true,
            exercicios: true,
            fisico: false,
            psicologico: true,
            especialidade: 'Médico'
          },
          {
            caminhoneiro: 'Fábio Coentrão',
            reclamacao: 'Problema 4',
            tipoSanquineo: 'A',
            fumante: false,
            obeso: false,
            drogas: false,
            alcool: false,
            coracao: true,
            diabetico: true,
            cirurgia: false,
            insonia: true,
            exercicios: true,
            fisico: false,
            psicologico: true,
            especialidade: 'Psicólogo'
          }
        ])
      })
  }

  get(i: number): Observable<Consultas> {
    return this.consultas$.pipe(
      map(consultas => (i >= 0 && i < consultas.length) ? consultas[i] : null),
      delay(1000)
    )
  }
}

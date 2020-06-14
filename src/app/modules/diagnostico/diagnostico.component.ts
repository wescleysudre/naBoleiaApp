import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diagnostico',
  templateUrl: './diagnostico.component.html',
  styleUrls: ['./diagnostico.component.scss']
})
export class DiagnosticoComponent implements OnInit {

  constructor(
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    this.router.navigate(['/solicitacoes']);
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  goBack() {
    this.router.navigate(['/solicitacoes']);
  }

}

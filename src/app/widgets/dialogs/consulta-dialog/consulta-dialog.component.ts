import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Consultas } from 'src/app/models/consultas';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-consulta-dialog',
  templateUrl: './consulta-dialog.component.html',
  styleUrls: ['./consulta-dialog.component.scss']
})
export class ConsultaDialogComponent implements OnInit {

  constructor(
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ConsultaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Consultas
  ) { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  openSnackBar(message: string, action: string) {
    this.dialogRef.close();
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }


}

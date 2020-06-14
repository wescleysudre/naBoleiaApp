import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alerta-dialog',
  templateUrl: './alerta-dialog.component.html',
  styleUrls: ['./alerta-dialog.component.scss']
})
export class AlertaDialogComponent implements OnInit {

  constructor(
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AlertaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
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

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-alerta-dialog',
  templateUrl: './alerta-dialog.component.html',
  styleUrls: ['./alerta-dialog.component.scss']
})
export class AlertaDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AlertaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}

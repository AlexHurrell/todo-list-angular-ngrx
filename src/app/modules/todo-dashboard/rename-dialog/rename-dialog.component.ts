import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './rename-dialog.component.html',
  styleUrls: ['./rename-dialog.component.scss'],
})
export class RenameDialogComponent {
  form = new FormGroup({
    name: new FormControl(''),
    resetDate: new FormControl(false),
  });

  constructor(public dialogRef: MatDialogRef<RenameDialogComponent>) {}

  onRename(): void {
    this.dialogRef.close();
  }
}

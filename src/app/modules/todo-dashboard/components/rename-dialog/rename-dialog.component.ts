import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './rename-dialog.component.html',
  styleUrls: ['./rename-dialog.component.scss'],
})
export class RenameDialogComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    resetDate: new FormControl(false),
  });

  constructor(public dialogRef: MatDialogRef<RenameDialogComponent>) {}

  onRename(): void {
    this.dialogRef.close();
  }
}

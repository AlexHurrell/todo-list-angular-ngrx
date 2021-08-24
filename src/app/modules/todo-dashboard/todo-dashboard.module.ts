import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDashboardPageComponent } from './todo-dashboard-page/todo-dashboard-page.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RenameDialogComponent } from './rename-dialog/rename-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [TodoDashboardPageComponent, RenameDialogComponent],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
})
export class TodoDashboardModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDashboardPageComponent } from './todo-dashboard-page/todo-dashboard-page.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [TodoDashboardPageComponent],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
    MatTableModule,
    MatSortModule,
  ],
})
export class TodoDashboardModule {}

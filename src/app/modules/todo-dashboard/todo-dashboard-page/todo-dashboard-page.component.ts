import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RenameDialogComponent } from '../rename-dialog/rename-dialog.component';

const storageKey = 'TodoAngular';

interface TodoItem {
  name: string;
  date: string;
  complete: boolean;
}

@Component({
  selector: 'app-todo-dashboard-page',
  templateUrl: './todo-dashboard-page.component.html',
  styleUrls: ['./todo-dashboard-page.component.scss'],
})
export class TodoDashboardPageComponent implements OnInit, AfterViewInit {
  todoDashboard: TodoItem[] = [
    { name: 'groceries', date: '1329793814334', complete: false },
    { name: 'coding', date: '1429793814334', complete: false },
    { name: 'running', date: '1529793814334', complete: false },
    { name: 'apartment searching', date: '1629793814334', complete: false },
  ];

  displayedColumns: string[] = ['name', 'date', 'completed', 'actions'];
  dataSource;

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  latestTask: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(
      JSON.parse(localStorage.getItem(storageKey)) ?? this.todoDashboard
    );
  }

  addItem() {
    if (this.latestTask) {
      this.dataSource.data.push({
        name: this.latestTask,
        date: String(new Date().getTime()),
      });
    }
    this.setDataSource(this.dataSource.data);
    this.latestTask = '';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteItem(index: number) {
    this.dataSource.data.splice(index, 1);
    this.setDataSource(this.dataSource.data);
  }

  completeTask(i: number, $event) {
    this.dataSource.data[i].completed = $event.checked;
    this.setDataSource(this.dataSource.data);
  }

  renameDialog(i) {
    const dialogRef = this.dialog.open(RenameDialogComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataSource.data[i] = {
          name: result.name,
          date: result.resetDate
            ? String(new Date().getTime())
            : this.dataSource.data[i].date,
        };
        this.setDataSource(this.dataSource.data);
      }
    });
  }

  private setDataSource(data: TodoItem[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sort = this.sort;
    localStorage.setItem(storageKey, JSON.stringify(this.dataSource.data));
  }
}

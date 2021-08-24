import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { RenameDialogComponent } from '../rename-dialog/rename-dialog.component';

interface TodoItem {
  name: string;
  date: string;
}

@Component({
  selector: 'app-todo-dashboard-page',
  templateUrl: './todo-dashboard-page.component.html',
  styleUrls: ['./todo-dashboard-page.component.scss'],
})
export class TodoDashboardPageComponent implements AfterViewInit {
  todoDashboard: TodoItem[] = [
    { name: 'groceries', date: '1329793814334' },
    { name: 'coding', date: '1429793814334' },
    { name: 'running', date: '1529793814334' },
    { name: 'apartment searching', date: '1629793814334' },
  ];

  displayedColumns: string[] = ['name', 'date', 'actions'];
  dataSource = new MatTableDataSource(this.todoDashboard);

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  latestTask: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

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
    console.log(index);
    this.dataSource.data.splice(index, 1);
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
  }
}

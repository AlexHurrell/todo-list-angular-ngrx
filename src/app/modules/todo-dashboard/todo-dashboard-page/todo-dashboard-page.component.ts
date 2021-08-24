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
    { name: 'groceries', date: '1629733816' },
    { name: 'coding', date: '1629733858' },
    { name: 'running', date: '1629733861' },
    { name: 'apartment searching', date: '1629733865' },
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
    this.dataSource.data.push({
      name: this.latestTask,
      date: String(new Date().getTime()),
    });

    this.dataSource = new MatTableDataSource(this.dataSource.data);
    this.dataSource.sort = this.sort;
    this.latestTask = '';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteItem(index: number) {
    console.log(index);
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
    this.dataSource.sort = this.sort;
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
        this.dataSource = new MatTableDataSource(this.dataSource.data);
        this.dataSource.sort = this.sort;
      }
    });
  }
}

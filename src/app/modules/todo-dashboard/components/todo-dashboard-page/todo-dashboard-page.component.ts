import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RenameDialogComponent } from '../rename-dialog/rename-dialog.component';
import { v4 as uuidv4 } from 'uuid';
import { select, Store } from '@ngrx/store';
import {
  addItem,
  completeItem,
  removeItem,
  renameItem,
} from '../../state/actions';
import { selectItems } from '../../state/selectors';
import { storageKey, TodoItem } from '../../models/models';

@Component({
  selector: 'app-todo-dashboard-page',
  templateUrl: './todo-dashboard-page.component.html',
  styleUrls: ['./todo-dashboard-page.component.scss'],
})
export class TodoDashboardPageComponent implements OnInit, AfterViewInit {
  todoDashboard: TodoItem[] = [
    {
      id: '110ec58a-a0f2-4ac4-8393-c866d813b8d1',
      name: 'groceries',
      date: '1329793814334',
      complete: false,
    },
    {
      id: '110ec58a-a0f2-4ac4-8393-c866d813b8d2',
      name: 'coding',
      date: '1429793814334',
      complete: false,
    },
    {
      id: '110ec58a-a0f2-4ac4-8393-c866d813b8d3',
      name: 'running',
      date: '1529793814334',
      complete: false,
    },
    {
      id: '110ec58a-a0f2-4ac4-8393-c866d813b8d4',
      name: 'apartment searching',
      date: '1629793814334',
      complete: false,
    },
  ];

  displayedColumns: string[] = ['name', 'date', 'complete', 'actions'];
  dataSource;

  items$ = this.store.pipe(select(selectItems));

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  latestTask: string;

  constructor(public dialog: MatDialog, public store: Store) {}

  ngOnInit(): void {
    this.store.pipe(select(selectItems)).subscribe((items) => {
      this.setDataSource(items);
    });
  }

  addItem() {
    const todo: TodoItem = {
      id: uuidv4(),
      name: this.latestTask,
      date: String(new Date().getTime()),
      complete: false,
    };
    this.store.dispatch(addItem({ todo }));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteItem(todo: TodoItem) {
    this.store.dispatch(removeItem({ todo }));
  }

  completeTask(element: TodoItem) {
    const todo = { ...element, complete: !element.complete };
    this.store.dispatch(completeItem({ todo }));
  }

  renameDialog(element: TodoItem, i: number) {
    const dialogRef = this.dialog.open(RenameDialogComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const todo = {
          ...element,
          name: result.name,
          date: result.resetDate
            ? String(new Date().getTime())
            : this.dataSource.data[i].date,
        };
        this.store.dispatch(renameItem({ todo }));
      }
    });
  }

  private setDataSource(data: TodoItem[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sort = this.sort;
    localStorage.setItem(storageKey, JSON.stringify(this.dataSource.data));
  }
}

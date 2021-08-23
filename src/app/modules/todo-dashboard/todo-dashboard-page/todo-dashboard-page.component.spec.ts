import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDashboardPageComponent } from './todo-dashboard-page.component';

describe('TodoDashboardPageComponent', () => {
  let component: TodoDashboardPageComponent;
  let fixture: ComponentFixture<TodoDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDashboardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

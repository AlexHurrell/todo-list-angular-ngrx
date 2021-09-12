import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDashboardPageComponent } from './modules/todo-dashboard/components/todo-dashboard-page/todo-dashboard-page.component';

const routes: Routes = [{ path: '', component: TodoDashboardPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

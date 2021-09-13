import { createSelector } from '@ngrx/store';
import { TodoItem } from '../models/models';

import { AppState } from './state';

export const selectItems = createSelector(
  (state: AppState) => state.items,
  (items: Array<TodoItem>) => items
);

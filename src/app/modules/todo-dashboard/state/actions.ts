import { createAction, props } from '@ngrx/store';
import { TodoItem } from '../models/models';

export const addItem = createAction(
  '[Item] Add Item',
  props<{ todo: TodoItem }>()
);

export const removeItem = createAction(
  '[Item] Remove Item',
  props<{ todo: TodoItem }>()
);

export const completeItem = createAction(
  '[Item] Complete Item',
  props<{ todo: TodoItem }>()
);

export const renameItem = createAction(
  '[Item] Rename Item',
  props<{ todo: TodoItem }>()
);

import { TodoItem } from '../models/models';

export interface AppState {
  items: ReadonlyArray<TodoItem>;
}

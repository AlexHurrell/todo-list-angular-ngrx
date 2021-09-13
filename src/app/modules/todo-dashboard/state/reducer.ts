import { createReducer, on } from '@ngrx/store';
import { storageKey, TodoItem } from '../models/models';
import { addItem, removeItem, completeItem, renameItem } from './actions';

export const initialState: ReadonlyArray<TodoItem> = JSON.parse(
  localStorage.getItem(storageKey)
) ?? [
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

export const itemsReducer = createReducer(
  initialState,
  on(removeItem, (state, { todo }) => {
    return state.filter((item) => item.id !== todo.id);
  }),
  on(addItem, (state, { todo }) => {
    return [...state, todo];
  }),
  on(completeItem, (state, { todo }) => {
    const index = state.findIndex((stateTodo) => stateTodo.id === todo.id);
    const stateCopy = [...state];
    stateCopy[index] = { ...stateCopy[index], complete: todo.complete };
    return stateCopy;
  }),
  on(renameItem, (state, { todo }) => {
    const index = state.findIndex((stateTodo) => stateTodo.id === todo.id);
    const stateCopy = [...state];
    stateCopy[index] = todo;
    return stateCopy;
  })
);

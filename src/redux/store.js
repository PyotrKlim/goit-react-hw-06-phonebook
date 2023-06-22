import { createStore } from 'redux';
import { reducer } from './slice';

export const store = createStore(reducer, {
  contacts: [],
  filter: '',
});

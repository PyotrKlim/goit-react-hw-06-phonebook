import { createStore } from 'redux';
// import { reducer } from './reducer';

const reducer = (state, action) => {
  if (action.type === 'AddContact')
    return { ...state, contacts: [...state.contacts, action.payload] };
  return state;
};

export const store = createStore(reducer, {
  contacts: [],
  filter: '',
});

console.log('store=>', store.getState());

store.dispatch({
  type: 'AddContact',
  payload: {
    name: 'N',
    number: 'n',
  },
});

console.log('store=>', store.getState());

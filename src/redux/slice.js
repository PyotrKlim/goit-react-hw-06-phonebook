export const reducer = (state, action) => {
  if (action.type === 'contacts/AddContact') {
    return { ...state, contacts: [...state.contacts, action.payload] };
  }
  if (action.type === 'contacts/DeleteContact') {
    return {
      ...state,
      contacts: state.contacts.filter(contact => contact.id !== action.payload),
    };
  }
  if (action.type === 'contacts/ChangeFilter') {
    return {
      ...state,
      filter: action.payload,
    };
  }
  return state;
};

import { selectContacts } from 'redux/selectors';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './Contacts/Contacts';
import FilterContacts from './FilterContacts/FilterContacts';
import { useSelector } from 'react-redux';

export default function App() {
  const contacts = useSelector(selectContacts);

  return (
    <>
      <ContactForm />
      <FilterContacts />
      {contacts.length > 0 && <ContactsList />}
    </>
  );
}

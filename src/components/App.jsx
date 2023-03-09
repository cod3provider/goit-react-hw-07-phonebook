import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import Wrap from './Wrap/Wrap';
import { useSelector } from 'react-redux';
import { getError, getLoading } from '../redux/contacts/contacts-selectors';

const App = () => {
  const isLoading = useSelector(getLoading);
  const isError = useSelector(getError);

  return (
    <Wrap>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>

      <div>
        <h2>Contacts</h2>
        <ContactFilter />
        {isLoading && !isError && <p>...Loading, wait</p>}
        <ContactList />
      </div>
    </Wrap>
  );
};

export default App;

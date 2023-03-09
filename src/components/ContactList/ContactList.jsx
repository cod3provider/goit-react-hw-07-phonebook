import ContactItem from '../ContactItem/ContactItem';

import { useDispatch, useSelector } from 'react-redux';
// import { getAllContacts } from '../../../../goit-react-hw-06-phonebook/src/redux/contacts/contacts-selectors';
// import { getFilter } from '../../../../goit-react-hw-06-phonebook/src/redux/filter/filter-selectors';

import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { useEffect } from 'react';

import s from './ContactList.module.css';
import { fetchAllContacts } from '../../redux/contacts/contacts-operations';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const contacts = useSelector(getFilteredContacts);
  // const filtered = useSelector(getFilter);

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;

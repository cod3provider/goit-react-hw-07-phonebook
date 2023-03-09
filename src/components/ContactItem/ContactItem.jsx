import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import s from './ContactItem.module.css';
import { fetchDeleteContact } from '../../redux/contacts/contacts-operations';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  return (
    <li key={id} className={s.item}>
      <p>{name}:</p>
      <p>{number}</p>
      <button
        className={s.button}
        type="submit"
        onClick={() => handleDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;

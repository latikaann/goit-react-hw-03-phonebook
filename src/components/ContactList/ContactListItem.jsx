import React from 'react';
import css from '../ContactList/ContactList.module.css';
import PropTypes from 'prop-types';

const ContactListItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <li className={css.contactsItem}>
      <span>{name}: </span>
      <span>{number}</span>

      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

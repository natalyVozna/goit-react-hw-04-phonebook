import {
  ContactList,
  ContactItem,
  Info,
  DeleteButton,
} from './Contacts.styled';
import PropTypes from 'prop-types';

export const Contacts = ({ contacts, onClickDelete }) => {
  return (
    <ContactList>
      {contacts.map(({ name, number, id }) => (
        <ContactItem key={id}>
          <Info>&#10003;</Info>
          <Info>{name}:</Info>
          <Info>{number}</Info>
          <DeleteButton type="button" onClick={() => onClickDelete(id)}>
            delete
          </DeleteButton>
        </ContactItem>
      ))}
    </ContactList>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

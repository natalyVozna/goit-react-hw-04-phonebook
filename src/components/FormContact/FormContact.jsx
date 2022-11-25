import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { InputStyled, LabelInput, Field, Form } from './FormContact.styled';
import { Button } from 'components/Button/Button';

export const FormContact = ({ onSubmitHandle }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const telInputId = nanoid();

  const handleChangeName = e => {
    setName(e.target.value);
  };
  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmitHandle({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field>
        <LabelInput htmlFor={nameInputId}>Name</LabelInput>
        <InputStyled
          type="text"
          name="name"
          id={nameInputId}
          value={name}
          onChange={handleChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Field>
      <Field>
        <LabelInput htmlFor={telInputId}>Number</LabelInput>
        <InputStyled
          type="tel"
          name="number"
          id={telInputId}
          value={number}
          onChange={handleChangeNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Field>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

FormContact.propTypes = {
  onSubmitHandle: PropTypes.func.isRequired,
};

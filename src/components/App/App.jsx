import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { Section } from '../Section/Section';
import { FormContact } from 'components/FormContact/FormContact';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { Title, SubTitle } from './App.styled';
import { Notification } from 'components/Notification/Notification';

const CONTACTS = 'contacts';

const getLocalContacts = () => {
  return JSON.parse(localStorage.getItem(CONTACTS));
};

export const App = () => {
  const [contacts, setContacts] = useState(() => getLocalContacts() ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(CONTACTS, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    const isName = contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (!isName) {
      setContacts(prev => [{ ...data, id: nanoid() }, ...prev]);
    } else {
      Notify.warning('You already have this contact');
    }
  };

  const getFilterContacts = () => {
    const normalizedContact = filter.toLowerCase();

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedContact);
    });
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const removeContact = contactId => {
    setContacts(prev => prev.filter(contact => contact.id !== contactId));

    Notify.failure('Contact deleted');
  };

  return (
    <Section>
      <Title>Phonebook</Title>
      <FormContact onSubmitHandle={addContact} />
      {contacts.length > 0 && (
        <>
          <SubTitle>Contacts</SubTitle>
          <Filter value={filter} onChange={changeFilter} />
        </>
      )}

      {getFilterContacts().length > 0 ? (
        <Contacts
          contacts={getFilterContacts()}
          onClickDelete={removeContact}
        />
      ) : (
        <Notification
          message={
            contacts.length > 0
              ? 'There is no match'
              : 'Your phonebook is empty'
          }
        />
      )}
    </Section>
  );
};

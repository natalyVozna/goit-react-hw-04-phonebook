import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { Section } from '../Section/Section';
import { FormContact } from 'components/FormContact/FormContact';
import { FormikContact } from 'components/FormikContact/FormikContact';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { Title, SubTitle } from './App.styled';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const isName = this.state.contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (!isName) {
      this.setState(({ contacts }) => {
        return { contacts: [{ ...data, id: nanoid() }, ...contacts] };
      });
    } else {
      Notify.warning('You already have this contact');
    }
    // this.setState(({ contacts }) => ({
    //   contacts: [{ ...data, id: nanoid() }, ...contacts],
    // }));
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedContact = filter.toLowerCase();

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedContact);
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));

    Notify.failure('Contact deleted');
  };

  componentDidMount() {
    console.log('componentDidMount', this.state.contacts);
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpda');
    console.log('componentDidUpda', this.state.contacts, prevState.contacts);
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  render() {
    const { filter, contacts } = this.state;
    const filterContacts = this.getFilterContacts();

    return (
      <Section>
        <Title>Phonebook</Title>
        <FormContact onSubmitHandle={this.addContact} />
        {/* <FormikContact onSubmitHandle={this.addContact} /> */}
        {contacts.length > 0 && (
          <>
            <SubTitle>Contacts</SubTitle>
            <Filter value={filter} onChange={this.changeFilter} />
          </>
        )}

        {filterContacts.length > 0 ? (
          <Contacts
            contacts={filterContacts}
            onClickDelete={this.removeContact}
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
  }
}

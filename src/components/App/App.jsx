import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { Section } from '../Section/Section';
import { FormContact } from 'components/FormContact/FormContact';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { Title, SubTitle } from './App.styled';
import { Notification } from 'components/Notification/Notification';
import { useEffect } from 'react';

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

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   addContact = data => {
//     const isName = this.state.contacts.some(
//       contact => contact.name.toLowerCase() === data.name.toLowerCase()
//     );
//     if (!isName) {
//       this.setState(({ contacts }) => {
//         return { contacts: [{ ...data, id: nanoid() }, ...contacts] };
//       });
//     } else {
//       Notify.warning('You already have this contact');
//     }
//     // this.setState(({ contacts }) => ({
//     //   contacts: [{ ...data, id: nanoid() }, ...contacts],
//     // }));
//   };

//   getFilterContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedContact = filter.toLowerCase();

//     return contacts.filter(contact => {
//       return contact.name.toLowerCase().includes(normalizedContact);
//     });
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   removeContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));

//     Notify.failure('Contact deleted');
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const { contacts } = this.state;
//     if (contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(contacts));
//     }
//   }

//   render() {
//     const { filter, contacts } = this.state;
//     const filterContacts = this.getFilterContacts();

//     return (
//       <Section>
//         <Title>Phonebook</Title>
//         <FormContact onSubmitHandle={this.addContact} />
//         {/* <FormikContact onSubmitHandle={this.addContact} /> */}
//         {contacts.length > 0 && (
//           <>
//             <SubTitle>Contacts</SubTitle>
//             <Filter value={filter} onChange={this.changeFilter} />
//           </>
//         )}

//         {filterContacts.length > 0 ? (
//           <Contacts
//             contacts={filterContacts}
//             onClickDelete={this.removeContact}
//           />
//         ) : (
//           <Notification
//             message={
//               contacts.length > 0
//                 ? 'There is no match'
//                 : 'Your phonebook is empty'
//             }
//           />
//         )}
//       </Section>
//     );
//   }
// }

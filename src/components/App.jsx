import { Component } from 'react';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactListComponent } from './ContactList/ContactList';

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

  componentDidMount() {
    const savedContacts = localStorage.getItem('contact');
    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    } else {
      localStorage.setItem('contact', JSON.stringify(this.state.contacts));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contact', JSON.stringify(this.state.contacts));
    }
  }

  addNumber = ({ name, number }) => {
    const contactWithSameName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const contactWithSameNumber = this.state.contacts.find(
      contact => contact.number === number
    );

    if (contactWithSameName && contactWithSameNumber) {
      Notiflix.Notify.failure(
        `Контакт з ім'ям ${name} та з номером ${number} вже існує!`
      );
    } else if (contactWithSameName) {
      Notiflix.Notify.failure(`Контакт з ім'ям ${name} вже існує!`);
    } else if (contactWithSameNumber) {
      Notiflix.Notify.failure(`Контакт з номером ${number} вже існує!`);
    } else {
      const newContact = { id: nanoid(), name, number };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
      Notiflix.Notify.success(`Контакт ${name} успішно додано!`);
    }
  };

  filterContacts = event => {
    this.setState({ filter: event.target.value });
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );

    return (
      <div style={{ marginBottom: '50px' }}>
        <ContactForm onSubmit={this.addNumber} />
        <Filter value={filter} onChange={this.filterContacts} />
        <ContactListComponent
          contacts={filteredContacts}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

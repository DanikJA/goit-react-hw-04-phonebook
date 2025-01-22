import { ContactItem } from '../ContactItem/ContactItem';
import {
  ContactListContainer,
  ContactListHeading,
  ContactList,
} from './ContactListStyled.jsx';

export const ContactListComponent = ({ contacts, onDelete }) => (
  <ContactListContainer>
    <ContactListHeading>Contacts:</ContactListHeading>
    <ContactList>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={onDelete}
        />
      ))}
    </ContactList>
  </ContactListContainer>
);

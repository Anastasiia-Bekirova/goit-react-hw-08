import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

import Contact from '../Contact/Contact'

import styles from './ContactList.module.css'

 

const ContactList = () => {
   
    const filteredContacts = useSelector(selectFilteredContacts);
     
   

    return (
        <ul className={styles.list}>
            {filteredContacts.map(contact => (
                <li key={contact.id}>
                    <Contact contact={contact}
                        number={contact.name}
                        id={contact.id } />
                </li>
            ))}
      </ul>
    )

}



export default ContactList;
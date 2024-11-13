
import { IoMdPerson } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

import styles from './Contact.module.css'

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {dispatch(deleteContact(contact.id))};
  

    return (<div className={styles.listItem}>
       <div className={styles.contactInformation}><p><IoMdPerson size="20"/> {contact.name}</p>  
        <p><FaPhone /> {contact.number}</p></div> 
        <button className={styles.button} onClick={handleDelete}>
      Delete
    </button>
    </div>
   
  );
}



export default Contact;
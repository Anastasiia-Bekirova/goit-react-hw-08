import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from '../../redux/contacts/operations';
import { selectContactsError, selectContactsLoading } from '../../redux/contacts/selectors';

import DocumentTitle from '../../components/DocumentTitle';
import ContactForm from '../../components/ContactForm/ContactForm'
import SearchBox from '../../components/SearchBox/SearchBox'
import ContactList from '../../components/ContactList/ContactList'


export default function ContactsPage() {
    const dispatch = useDispatch();
    const loading = useSelector(selectContactsLoading);
    const error = useSelector(selectContactsError);
    
 
  
  useEffect(() => {
 
      dispatch (fetchContacts());
    
  }, [dispatch]);
  return (
    <div>
      <DocumentTitle>Your Contacts</DocumentTitle>
      <div>
  <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error &&  <p> Request in progress...</p>}
        <ContactList  />
</div>
    </div>
  );
}
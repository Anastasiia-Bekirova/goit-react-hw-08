import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import { selectContactsError, selectContactsLoading } from './redux/contactsSlice';

import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'

import './App.css'

function App() {
   const dispatch = useDispatch();
    const loading = useSelector(selectContactsLoading);
    const error = useSelector(selectContactsError);
    
 
  
  useEffect(() => {
 
      dispatch (fetchContacts());
    
  }, [dispatch]);
  return (
  
     <div>
  <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error &&  <p> Request in progress...</p>}
        <ContactList  />
</div>
    
  )
}

export default App;
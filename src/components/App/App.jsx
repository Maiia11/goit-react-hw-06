
import { useEffect, useState } from 'react'
import ContactList from '../ContactList/ContactList'
import './App.css'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import initialContacts from '../contacts.json'
import { useSelector } from 'react-redux'
import { getContacts, getFilters } from '../../redux/selectors'


const createInitialContacts = () => {
  const localContacts = localStorage.getItem("contacts")
  if (localContacts) {
    return JSON.parse(localContacts)
  }
  return initialContacts
}

function App() {

  const contacts = useSelector(getContacts);
  console.log(contacts);

  const filters = useSelector(getFilters);
  console.log(filters);

  const [contact, setContact] = useState(createInitialContacts);
  const [filter, setFilter] = useState('');

  const addContact = (newContact) => {
    setContact((prevContacts) => {
      return [...prevContacts, newContact]
    });
    
  }

  const deleteContact = (contactId) => {
    setContact((prevContacts) => {
      return prevContacts.filter(item => item.id !== contactId)
    });
    
  }

  const filterContacts = contact.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()));

   useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contact))
   }, [contact])
  
  

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact } />
      <SearchBox value={filter} onFilter={setFilter } />
      <ContactList contact={filterContacts} onDelete={deleteContact} />
      
      
</div>
  )
}

export default App

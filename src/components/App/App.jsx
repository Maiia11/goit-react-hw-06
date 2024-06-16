
import { useEffect, useState } from 'react'
import ContactList from '../ContactList/ContactList'
import './App.css'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import initialContacts from '../contacts.json'
import { useSelector } from 'react-redux'



const createInitialContacts = () => {
  const localContacts = localStorage.getItem("contacts")
  if (localContacts) {
    return JSON.parse(localContacts)
  }
  return initialContacts
}

function App() {

  
  

  
  

  // const [contact, setContact] = useState(createInitialContacts);
  // const [filter, setFilter] = useState('');

  // const addContact = (newContact) => {
  //   setContact((prevContacts) => {
  //     return [...prevContacts, newContact]
  //   });
    
  // }

  // const deleteContact = (contactId) => {
  //   setContact((prevContacts) => {
  //     return prevContacts.filter(item => item.id !== contactId)
  //   });
    
  // }

  // const filterContacts = contact.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()));

  //  useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contact))
  //  }, [contact])
  
  

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm  />
      <SearchBox />
      <ContactList />
</div>
  )
}

export default App

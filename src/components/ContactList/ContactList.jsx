import {  useSelector } from "react-redux";
import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
import { getContacts } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(getContacts);
  
  
  return (
      <ul className={css.container}>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              <Contact name={name} number={number} id={id} />
            
          </li>) )}
    </ul>
  )
}

export default ContactList
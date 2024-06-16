import { createSlice } from "@reduxjs/toolkit";
import contacts from "../components/contacts.json"

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: contacts
    }, 
    reducers: {
        
    }
})

 export const contactsReducer = contactsSlice.reducer;
import { createSlice, nanoid } from "@reduxjs/toolkit";
import contacts from "../components/contacts.json"

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: contacts
    },
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload)
            
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name, number
                    },
                };
            },
        
        },
    
    },
})
export const { addContact } = contactsSlice.actions;
 export const contactsReducer = contactsSlice.reducer;